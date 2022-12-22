from __future__ import annotations

from abc import abstractmethod
from dataclasses import dataclass

from sentry.services.hybrid_cloud import InterfaceWithLifecycle, silo_mode_delegation, stubbed
from sentry.silo import SiloMode


@dataclass(frozen=True)
class APIIdentityProvider:
    id: int
    type: str
    external_id: str


@dataclass(frozen=True)
class APIIdentity:
    id: int
    idp_id: int
    user_id: int
    external_id: str


class IdentityService(InterfaceWithLifecycle):
    @abstractmethod
    def get_identity_by_provider(self, user_id: int, idp_id: int) -> APIIdentity | None:
        pass

    @abstractmethod
    def get_by_external_ids(
        self, provider_type: str, provider_ext_id: str, identity_ext_id: str
    ) -> APIIdentity | None:
        pass


def impl_with_db() -> IdentityService:
    from sentry.services.hybrid_cloud.identity.impl import DatabaseBackedIdentityService

    return DatabaseBackedIdentityService()


identity_service: IdentityService = silo_mode_delegation(
    {
        SiloMode.MONOLITH: impl_with_db,
        SiloMode.REGION: stubbed(impl_with_db, SiloMode.CONTROL),
        SiloMode.CONTROL: impl_with_db,
    }
)
