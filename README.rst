What's Sentry?
--------------

Sentry fundamentally is a service that helps you monitor and fix crashes in realtime.
The server is in Python, but it contains a full API for sending events from any
language, in any application.

Official Sentry SDKs
~~~~~~~~~~~~~~~~~~~~
* `JavaScript <https://github.com/getsentry/sentry-javascript>`_
* `React-Native <https://github.com/getsentry/react-native-sentry>`_
* `Python <https://github.com/getsentry/sentry-python>`_
* `Ruby <https://github.com/getsentry/raven-ruby>`_
* `PHP <https://github.com/getsentry/sentry-php>`_
* `Go <https://github.com/getsentry/raven-go>`_
* `Java <https://github.com/getsentry/sentry-java>`_
* `Objective-C/Swift <https://github.com/getsentry/sentry-cocoa>`_
* `C# <https://github.com/getsentry/sentry-dotnet>`_
* `Perl <https://github.com/getsentry/perl-raven>`_
* `Elixir <https://github.com/getsentry/sentry-elixir>`_
* `Laravel <https://github.com/getsentry/sentry-laravel>`_

Resources
---------

* `Documentation <https://docs.sentry.io/>`_
* `Community <https://forum.sentry.io/>`_ (Bugs, feature requests, general questions)
* `Contributing <https://docs.sentry.io/internal/contributing/>`_
* `Bug Tracker <https://github.com/getsentry/sentry/issues>`_
* `Code <https://github.com/getsentry/sentry>`_
* `IRC <irc://irc.freenode.net/sentry>`_  (irc.freenode.net, #sentry)
* `Transifex <https://www.transifex.com/getsentry/sentry/>`_ (Translate Sentry!)

Build
---------

# Requirement
- python2.7
- nodejs

# Step
1. Install node and npm via nvm
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install 8.15.1
npm install -g yarn
yarn install --pure-lockfile
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