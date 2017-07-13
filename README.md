# NSClient++ documentation

## Index

- Manual:
  - [NSClient++](index.md)
  - [Getting Started](getting_started.md)
  - [Theory](theory.md)
  - [Checking Things](checks.md)
  - [Installing NSClient++](installing.md)
  - [Configuration](settings.md)
  - [FAQ](faq.md)
- About:
  - [Documentation](about/index.md)
  - [Whats New]()
    - [0.4.0](about/whatsnew/0.4.0.md)
    - [0.4.1](about/whatsnew/0.4.1.md)
    - [0.4.2](about/whatsnew/0.4.2.md)
    - [0.4.3](about/whatsnew/0.4.3.md)
    - [0.4.4](about/whatsnew/0.4.4.md)
    - [0.5.0](about/whatsnew/0.5.0.md)
  - [Building NSClient++](about/build.md)
  - [Reporting Bugs](about/bugs.md)
  - [Copyright](about/copyright.md)
  - [License](about/license.md)
- Tutorial: tutorial/index.md
- Howto:
  - [Checking things](howto/checks.md)
  - [Performance Counters](howto/counters.md)
  - [External scripts](howto/external_scripts.md)
  - [Running commands](howto/run_commands.md)
  - [NRPE](howto/nrpe.md)
  - [NSCA](howto/nsca.md)
  - [Migrate from 0.3](howto/03x_migration.md)
- Reference:
  - [Reference](reference/index.md)
  - Check commands:
    - [CheckDisk (Windows)](reference/windows/CheckDisk.md)
    - [CheckExternalScripts](reference/check/CheckExternalScripts.md)
    - [CheckEventLog (Windows)](reference/windows/CheckEventLog.md)
    - [CheckHelpers](reference/check/CheckHelpers.md)
    - [CheckLogFile](reference/check/CheckLogFile.md)
    - [CheckMKClient](reference/check/CheckMKClient.md)
    - [CheckMKServer](reference/check/CheckMKServer.md)
    - [CheckNet](reference/misc/CheckNet.md)
    - [CheckNSCP](reference/check/CheckNSCP.md)
    - [CheckSystemUnix (unix)](reference/unix/CheckSystemUnix.md)
    - [CheckSystem (Windows)](reference/windows/CheckSystem.md)
    - [CheckTaskSched (Windows)](reference/windows/CheckTaskSched.md)
    - [CheckWMI (Windows)](reference/windows/CheckWMI.md)
  - Clients & Servers:
    - [WEBServer](reference/generic/WEBServer.md)
    - [WEBClient](reference/misc/WEBClient.md)
    - [NRPEServer](reference/client/NRPEServer.md)
    - [NRPEClient](reference/client/NRPEClient.md)
    - [NSClientServer](reference/windows/NSClientServer.md)
    - [NSCAServer](reference/client/NSCAServer.md)
    - [NSCAClient](reference/client/NSCAClient.md)
    - [NRDPClient](reference/client/NRDPClient.md)
    - [SMTPClient](reference/client/SMTPClient.md)
    - [GraphiteClient](reference/client/GraphiteClient.md)
    - [SyslogClient](reference/client/SyslogClient.md)
    - [CollectdClient](reference/misc/CollectdClient.md)
  - Helper modules:
    - [Scheduler](reference/generic/Scheduler.md)
    - [SimpleFileWriter](reference/generic/SimpleFileWriter.md)
    - [CommandClient](reference/generic/CommandClient.md)
    - [SimpleCache](reference/generic/SimpleCache.md)
    - [PythonScript](reference/generic/PythonScript.md)
    - [LUAScript](reference/generic/LUAScript.md)
    - [DotnetPlugins](reference/windows/DotnetPlugins.md)
  - API:
    - [API](api/index.md)
    - [Plugin](api/plugin.md)

## About documentation

The NSClient++ documentation is written in GitHub flavored [Markdown](https://guides.github.com/features/mastering-markdown/).
It is located in the `docs/` directory and can be edited with your preferred editor. You can also
edit it online on GitHub.

```
vim docs/installing.md
```

In order to review and test changes, you can install the [mkdocs](http://www.mkdocs.org) Python library.

```
pip install mkdocs
```

Note: Use at least 0.16, 0.14 has this [bug](https://github.com/mkdocs/mkdocs/issues/1213).

This allows you to start a local mkdocs viewer instance on http://localhost:8000

```
mkdocs serve
```

Changes on the chapter layout can be done inside the `mkdocs.yml` file in the main tree.

