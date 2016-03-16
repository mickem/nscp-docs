.. _manual_installing:

#######################
 Installing NSClient++
#######################

This is a grooving process before it was all manual but slowly we are getting a more "automated" installation process so hopefully this will keep improving in the future as well and some of the steps might go away.

1. Installation
===============

NSClient++ comes with an interactive installer (MSI) which is the prefered method of installation.
There is also a command line option for registering (and de-registering) the service.

Details on how to do silent installs and automated silent installs can be found below.

Thus for most people installing NSClient++ is simply running the MSI entering some options and clicking next.
**BUT** this is only where the fun begins. After installing NSClient++ you need to configure it.

2. Configuration
================

Before you start NSClient++ you need to configure it by editing the configuration. The configuration is usually in a file called nsclient.ini.
But the configuration can be stored elsewhere as will (for instance registry is a great place on Windows).
To check where the configuratio is stored you can trun the following command::

	$ nscp settings --show
	INI settings: (ini://${shared-path}/nsclient.ini, C:\source\build\x64\dev/nsclient.ini)

Now this configuration can include other configuration files so you need to check that as well. So it is possible to include the registry from the ini file and vice versa.
For details on the configuration options check the :doc:`../reference/index`.

3. System tray
==============

The system tray has been removed in the 0.4.0 version it will not be added back instead we have the WEBUI in 0.4.3.

4. Testing and Debugging
========================

After you have installed NSClient++ you need to start it.
As it is a normal Windows service you can either use the "net start" and "net stop" commands in the command line or you can use the Computer Manager's Services node.

When you are starting and/or configuring your client you can use the "debug" mode which will be very helpful as you will see the debug log in "real time" when you play around with it.
To start NSClient++ in test/debug mode use the following command:

.. code-block:: bat

    nscp test

5. Windows Firewall
===================

A windows firewall exception for NRPE and check_nt is installed (optional) if you have another firewall then the built-in one you might have to manually add exceptions to all incoming traafic if you wich to use check_nrpe and/or check_nt.

6. External Firewall (optional)
===============================

Firewall configuration should be pretty straight forward:

- If you use NRPEServer (check_nrpe, NRPEListener) you need the NRPE port open (usually 5666) from the nagios server towards the client.
- If you use the NSClientServer (check_nt, NSClientListener) you need the (modified) NSClient port open (usually 12489) from the nagios server towards the client.
- If you use the NSCA Module (passive checks) you need the NSCA port open from the client towards the nagios server.
  client:* -> nagios:5667

- Also be aware that ports are configurable so if you override the defaults you obviously need to update the firewall rules accordingly.
- There a multitude of other protocol which you can also use with NSCLient++ (including, NRPE, NSCA, Syslog, SMTP, etc etc) so please review what your firewall setup in conjunction with you NSClient++ design.

========== ========== =========== ============= ================ ==================================================================
Protocol   Source     Source port Destination   Destination port Comment
========== ========== =========== ============= ================ ==================================================================
NRPE       **nagios** <all>       client        5666             The nagios server initiates a call to the client on port 5666
NSClient   **nagios** <all>       client        12489            The nagios server initiates a call to the client on port 12489
NSCA       client     <all>       **nagios**    5667             The client initiates a call to the nagios server on port 5667
NRPE-proxy client     <all>       remote-client 5666             The client initiates a call to the remote client on port 5666
========== ========== =========== ============= ================ ==================================================================

- **nagios** is the IP/host of the main monitoring server
- client is the Windows computer where you have installed NSClient++
- remote-client is the "other" client you want to check from NSClient++ (using NSClient++ as a proxy)

All these ports can be changed -- check your nsclient.ini.

7. NSClient++ WIndows Installer
===============================

The NSClient++ installer for windows is a standard MSI installer which means it can be installed using pretty much all deployment techniques available on the windows platform.
This means that there is no built-in deploy and configuration mechanism in NSClient++ instead it fully relies on standard tools provided for the Windows plattform.

MSI files can be tweaked in several ways.

Configuration options
=====================

There are several options for deploying configuration and copying textfile is probably the worst of them.
You can use group policies to push the configuration files but there are several other ways to do the same.

MSI Options
===========

The MSI file can be customized during the installer. The following keys are available:

====================== ============================================================================
Keyword                Description
====================== ============================================================================
INSTALLLOCATION        Folder where NSCLient++ is installed.
CONF_CAN_CHANGE        Has to be set for all configuration changes to be applied.
ADD_DEFAULTS           Add default values to the configuration file.
ALLOWED_HOSTS          Set allowed hosts value
CONFIGURATION_TYPE     Configuration context to use
CONF_CHECKS            Enable default check plugins
CONF_NRPE              Enable NRPE server
CONF_NSCA              Enable NSCA Collection /OU probably need scheduler as well)
CONF_NSCLIENT          Enable NSCLient Server (check_nt)
CONF_SCHEDULER         Enable Scheduler (required by NSCA)
CONF_WEB               ENabled WEB Server
NRPEMODE               NRPE Mode (LEGACY = default old insecure SSL, SAFE = new secure SSL)
NSCLIENT_PWD           Password to use for check_nt (and web server)
====================== ============================================================================

Features
========

NSClient++ consists of the following features most which can be disable when doing silent installs.


=========================== ======================= ============================================================================================================
Feature Name                Title                   Description
=========================== ======================= ============================================================================================================
CheckPlugins                Check Plugins           Various plugins to check your system. (Includes all check plugins)
Documentation               Documentation (pdf)     Documentation for NSClient++ and how to use it from Nagios
DotNetPluginSupport         .net plugin support     Support for loading modules written in .dot net (Requires installing .net framework)
ExtraClientPlugin           Various client plugins  Plugins to connect to various sytems such as syslog, graphite and smtp
FirewallConfig              Firewall Exception      A firewall exception to allow NSClient++ to open ports
LuaScript                   Lua Scripting           Allows running INTERNAL scripts written in Lua
NRPEPlugins                 NRPE Support            NRPE Server Plugin. Support for the more vercitile NRPE protocol (check_nrpe)
NSCAPlugin                  NSCA plugin             Plugin to submit passive results to an NSCA server
NSCPlugins                  check_nt support        NSClient Server Plugin. Support for the old NSClient protocol (check_nt)
PythonScript                Python Scripting        Allows running INTERNAL scripts written in Python
SampleConfig                Sample config           Sample config file (with all options)
SampleScripts               Scripts                 Scripts for checking and testing various aspects of your computer and NSClient++
Shortcuts                   Shortcuts               Main Service shortcuts
WEBPlugins                  WEB Server              NSClient WEB Server. Use this to administrate or check NSCLient via a browser or REST API
=========================== ======================= ============================================================================================================

Silent install
==============

Now we can put all this together using the normal silent installer which is again part of the standard windows install toolkit. So if you already have a framework for managing installs use that instead of this command line.
The gist of it is:

.. code-block:: bat

    msiexec /quiet /i <MSI FILE> PROPERTY=PropertyValue ...


For instance Installing (with log) nsclient++ into c:\foobar using registry as configuration and not installing the Python script binaries.

.. code-block:: bat

    msiexec /qn /l* log.txt /i NSCP-0.4.3.50-x64.msi INSTALLLOCATION=c:\FooBar CONFIGURATION_TYPE=registry://HKEY_LOCAL_MACHINE/software/NSClient++ ADDDEFAULT=ALL REMOVE=PythonScript

Multiple NSClient++
===================

As NSClient++ uninstalls it self if you install there are two options for running multipl NSClient++ on a machine.

 #. You can add multipl services for the same installation
 #. You can manually install NSClient++

To add multipl service you need to first create the services::

	nscp service --install --name nscp2

And then edit the start command so you can override the configuration. The key to look for in the registry is HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<NAME OF SERVICE> and there you can modify the ImagePath::

	"C:\Program Files\NSClient++\nscp.exe" service --run --name nscp --settings ini://${shared-path}/nsclient-2.ini
