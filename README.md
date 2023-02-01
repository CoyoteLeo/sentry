What\'s Sentry?
===============

Sentry fundamentally is a service that helps you monitor and fix crashes
in realtime. The server is in Python, but it contains a full API for
sending events from any language, in any application.

Official Sentry SDKs
--------------------

-   [JavaScript](https://github.com/getsentry/sentry-javascript)
-   [React-Native](https://github.com/getsentry/react-native-sentry)
-   [Python](https://github.com/getsentry/sentry-python)
-   [Ruby](https://github.com/getsentry/raven-ruby)
-   [PHP](https://github.com/getsentry/sentry-php)
-   [Go](https://github.com/getsentry/raven-go)
-   [Java](https://github.com/getsentry/sentry-java)
-   [Objective-C/Swift](https://github.com/getsentry/sentry-cocoa)
-   [C\#](https://github.com/getsentry/sentry-dotnet)
-   [Perl](https://github.com/getsentry/perl-raven)
-   [Elixir](https://github.com/getsentry/sentry-elixir)
-   [Laravel](https://github.com/getsentry/sentry-laravel)

Resources
=========

-   [Documentation](https://docs.sentry.io/)
-   [Community](https://forum.sentry.io/) (Bugs, feature requests,
    general questions)
-   [Contributing](https://docs.sentry.io/internal/contributing/)
-   [Bug Tracker](https://github.com/getsentry/sentry/issues)
-   [Code](https://github.com/getsentry/sentry)
-   [IRC](irc://irc.freenode.net/sentry) (irc.freenode.net, \#sentry)
-   [Transifex](https://www.transifex.com/getsentry/sentry/) (Translate
    Sentry!)

# Build

## Requirement
- python2.7
- nodejs

## Step
1. Install node and npm via nvm
    ```shell
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash nvm install 8.15.1 npm install -g yarn yarn install --pure-lockfile
    ```

2. Install python packages
    ```shell
    pip install -r requirements-base.txt
    ```

3. Install sentry
    ```shell
    pip install .
    ```

4. Build
    ```shell
    python setup.py sdist bdist_wheel
    ```
