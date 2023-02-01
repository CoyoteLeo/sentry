What's Sentry?
==============

Sentry fundamentally is a service that helps you monitor and fix crashes
in realtime. The server is in Python, but it contains a full API for
sending events from any language, in any application.

Official Sentry SDKs
--------------------

-  `JavaScript <https://github.com/getsentry/sentry-javascript>`__
-  `React-Native <https://github.com/getsentry/react-native-sentry>`__
-  `Python <https://github.com/getsentry/sentry-python>`__
-  `Ruby <https://github.com/getsentry/raven-ruby>`__
-  `PHP <https://github.com/getsentry/sentry-php>`__
-  `Go <https://github.com/getsentry/raven-go>`__
-  `Java <https://github.com/getsentry/sentry-java>`__
-  `Objective-C/Swift <https://github.com/getsentry/sentry-cocoa>`__
-  `C# <https://github.com/getsentry/sentry-dotnet>`__
-  `Perl <https://github.com/getsentry/perl-raven>`__
-  `Elixir <https://github.com/getsentry/sentry-elixir>`__
-  `Laravel <https://github.com/getsentry/sentry-laravel>`__

Resources
=========

-  `Documentation <https://docs.sentry.io/>`__
-  `Community <https://forum.sentry.io/>`__ (Bugs, feature requests,
   general questions)
-  `Contributing <https://docs.sentry.io/internal/contributing/>`__
-  `Bug Tracker <https://github.com/getsentry/sentry/issues>`__
-  `Code <https://github.com/getsentry/sentry>`__
-  `IRC <irc://irc.freenode.net/sentry>`__ (irc.freenode.net, #sentry)
-  `Transifex <https://www.transifex.com/getsentry/sentry/>`__
   (Translate Sentry!)

Build
=====

Requirement
-----------

-  python2.7
-  nodejs

Step
----

1. Install node and npm via nvm
   ``shell     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash nvm install 8.15.1 npm install -g yarn yarn install --pure-lockfile``

2. Install python packages
   ``shell     pip install -r requirements-base.txt``

3. Install sentry ``shell     pip install .``

4. Build ``shell     python setup.py sdist bdist_wheel``
