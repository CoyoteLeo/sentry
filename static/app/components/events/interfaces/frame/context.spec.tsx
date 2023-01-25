import {render} from 'sentry-test/reactTestingLibrary';

import ProjectsStore from 'sentry/stores/projectsStore';
import {Coverage, Frame, LineCoverage} from 'sentry/types';
import trackAdvancedAnalyticsEvent from 'sentry/utils/analytics/trackAdvancedAnalyticsEvent';
import {Color} from 'sentry/utils/theme';

import Context, {getCoverageAnalytics, getCoverageColors} from './context';

jest.mock('sentry/utils/analytics/trackAdvancedAnalyticsEvent');

describe('Frame - Context', function () {
  const org = TestStubs.Organization();
  const project = TestStubs.Project({});
  const event = TestStubs.Event({projectID: project.id});
  const integration = TestStubs.GitHubIntegration();
  const repo = TestStubs.Repository({integrationId: integration.id});
  const frame = {filename: '/sentry/app.py', lineNo: 233} as Frame;
  const config = TestStubs.RepositoryProjectPathConfig({project, repo, integration});

  beforeEach(function () {
    jest.clearAllMocks();
    MockApiClient.clearMockResponses();
    ProjectsStore.loadInitialData([project]);
  });

  const lines: Array<[number, string]> = [
    [231, 'this is line 231'],
    [232, 'this is line 232'],
    [233, 'this is line 233'],
    [234, 'this is line 234'],
  ];

  const lineCoverage: LineCoverage[] = [
    [230, Coverage.PARTIAL],
    [231, Coverage.PARTIAL],
    [232, Coverage.COVERED],
    [234, Coverage.NOT_COVERED],
  ];

  const lineColors: Array<Color | 'transparent'> = [
    'yellow100',
    'green100',
    'transparent',
    'red100',
  ];

  const primaryLineIndex = 1;

  it('converts coverage data to the right colors', function () {
    expect(getCoverageColors(lines, lineCoverage)).toEqual(lineColors);
  });

  it('tracks coverage analytics', function () {
    getCoverageAnalytics(lineColors, primaryLineIndex, TestStubs.Organization());

    expect(trackAdvancedAnalyticsEvent).toHaveBeenCalledWith(
      'issue_details.codecov_primary_line_coverage_shown',
      {success: true, organization: org}
    );
    expect(trackAdvancedAnalyticsEvent).toHaveBeenCalledWith(
      'issue_details.codecov_surrounding_lines_coverage_shown',
      {organization: org, success: false}
    );
  });

  it("doesn't query stacktrace link if the flag is off", function () {
    const mock = MockApiClient.addMockResponse({
      url: `/projects/${org.slug}/${project.slug}/stacktrace-link/`,
      body: {
        config,
        sourceUrl: null,
        integrations: [integration],
      },
    });
    render(
      <Context
        frame={frame}
        event={event}
        organization={org}
        registers={{}}
        components={[]}
      />,
      {
        context: TestStubs.routerContext([{organization: org}]),
        organization: org,
        project,
      }
    );

    expect(mock).not.toHaveBeenCalled();
  });
});
