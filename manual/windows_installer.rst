.. _manual-msi:

##############################
 NSClient++ WIndows Installer
##############################

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


