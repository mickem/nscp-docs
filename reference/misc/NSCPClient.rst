.. default-domain:: nscp

.. module:: NSCPClient
    :synopsis: NSCP client can be used both from command line and from queries to check remote systes via NSCP

===================================
:module:`NSCPClient` --- NSCPClient
===================================
NSCP client can be used both from command line and from queries to check remote systes via NSCP

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`nscp_exec` | Execute remote script via NSCP.
    :query:`nscp_query` | Request remote information via NSCP.
    :query:`nscp_submit` | Submit information to remote host via NSCP.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/nscp/client` | :confkey:`~/settings/nscp/client.channel` | CHANNEL
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.certificate` | SSL CERTIFICATE
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.timeout` | TIMEOUT
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.verify mode` | VERIFY MODE

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.alias` | ALIAS
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.ca` | CA
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.dh` | DH KEY
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.is template` | IS TEMPLATE
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.parent` | PARENT
    :confpath:`/settings/nscp/client/targets/default` | :confkey:`~/settings/nscp/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.alias` | ALIAS
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.ca` | CA
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.certificate` | SSL CERTIFICATE
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.dh` | DH KEY
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.is template` | IS TEMPLATE
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.parent` | PARENT
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.timeout` | TIMEOUT
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/nscp/client/targets/sample` | :confkey:`~/settings/nscp/client/targets/sample.verify mode` | VERIFY MODE


Queries
=======
A quick reference for all avalible queries (check commands) in the NSCPClient module.

:query:`nscp_exec`
------------------
.. query:: nscp_exec
    :synopsis: Execute remote script via NSCP.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`host` |  | The host of the host running the server
    :option:`port` |  | The port of the host running the server
    :option:`address` |  | The address (host:port) of the host running the server
    :option:`timeout` |  | Number of seconds before connection times out (default=10)
    :option:`target` |  | Target to use (lookup connection info from config)
    :option:`retry` |  | Number of times ti retry a failed connection attempt (default=2)
    :option:`command` |  | The name of the command that the remote daemon should run
    :option:`arguments` |  | list of arguments
    :option:`no-ssl` | N/A | Do not initial an ssl handshake with the server, talk in plaintext.
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | Length of payload (has to be same as on the server)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format
    :option:`ca` |  | Certificate authority
    :option:`verify` |  | Client certificate format
    :option:`allowed-ciphers` |  | Client certificate format
    :option:`ssl` | N/A | Initial an ssl handshake with the server.
    :option:`timeout` |  | 


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: host
    :synopsis: The host of the host running the server

    | The host of the host running the server

.. option:: port
    :synopsis: The port of the host running the server

    | The port of the host running the server

.. option:: address
    :synopsis: The address (host:port) of the host running the server

    | The address (host:port) of the host running the server

.. option:: timeout
    :synopsis: Number of seconds before connection times out (default=10)

    | Number of seconds before connection times out (default=10)

.. option:: target
    :synopsis: Target to use (lookup connection info from config)

    | Target to use (lookup connection info from config)

.. option:: retry
    :synopsis: Number of times ti retry a failed connection attempt (default=2)

    | Number of times ti retry a failed connection attempt (default=2)

.. option:: command
    :synopsis: The name of the command that the remote daemon should run

    | The name of the command that the remote daemon should run

.. option:: arguments
    :synopsis: list of arguments

    | list of arguments

.. option:: no-ssl
    :synopsis: Do not initial an ssl handshake with the server, talk in plaintext.

    | Do not initial an ssl handshake with the server, talk in plaintext.

.. option:: certificate
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: dh
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: certificate-key
    :synopsis: Client certificate to use

    | Client certificate to use

.. option:: certificate-format
    :synopsis: Client certificate format

    | Client certificate format

.. option:: ca
    :synopsis: Certificate authority

    | Certificate authority

.. option:: verify
    :synopsis: Client certificate format

    | Client certificate format

.. option:: allowed-ciphers
    :synopsis: Client certificate format

    | Client certificate format

.. option:: ssl
    :synopsis: Initial an ssl handshake with the server.

    | Initial an ssl handshake with the server.

.. option:: timeout
    :synopsis: 




:query:`nscp_query`
-------------------
.. query:: nscp_query
    :synopsis: Request remote information via NSCP.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`host` |  | The host of the host running the server
    :option:`port` |  | The port of the host running the server
    :option:`address` |  | The address (host:port) of the host running the server
    :option:`timeout` |  | Number of seconds before connection times out (default=10)
    :option:`target` |  | Target to use (lookup connection info from config)
    :option:`retry` |  | Number of times ti retry a failed connection attempt (default=2)
    :option:`command` |  | The name of the query that the remote daemon should run
    :option:`arguments` |  | list of arguments
    :option:`query-command` |  | The name of the query that the remote daemon should run
    :option:`query-arguments` |  | list of arguments
    :option:`no-ssl` | N/A | Do not initial an ssl handshake with the server, talk in plaintext.
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | Length of payload (has to be same as on the server)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format
    :option:`ca` |  | Certificate authority
    :option:`verify` |  | Client certificate format
    :option:`allowed-ciphers` |  | Client certificate format
    :option:`ssl` | N/A | Initial an ssl handshake with the server.
    :option:`timeout` |  | 


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: host
    :synopsis: The host of the host running the server

    | The host of the host running the server

.. option:: port
    :synopsis: The port of the host running the server

    | The port of the host running the server

.. option:: address
    :synopsis: The address (host:port) of the host running the server

    | The address (host:port) of the host running the server

.. option:: timeout
    :synopsis: Number of seconds before connection times out (default=10)

    | Number of seconds before connection times out (default=10)

.. option:: target
    :synopsis: Target to use (lookup connection info from config)

    | Target to use (lookup connection info from config)

.. option:: retry
    :synopsis: Number of times ti retry a failed connection attempt (default=2)

    | Number of times ti retry a failed connection attempt (default=2)

.. option:: command
    :synopsis: The name of the query that the remote daemon should run

    | The name of the query that the remote daemon should run

.. option:: arguments
    :synopsis: list of arguments

    | list of arguments

.. option:: query-command
    :synopsis: The name of the query that the remote daemon should run

    | The name of the query that the remote daemon should run

.. option:: query-arguments
    :synopsis: list of arguments

    | list of arguments

.. option:: no-ssl
    :synopsis: Do not initial an ssl handshake with the server, talk in plaintext.

    | Do not initial an ssl handshake with the server, talk in plaintext.

.. option:: certificate
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: dh
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: certificate-key
    :synopsis: Client certificate to use

    | Client certificate to use

.. option:: certificate-format
    :synopsis: Client certificate format

    | Client certificate format

.. option:: ca
    :synopsis: Certificate authority

    | Certificate authority

.. option:: verify
    :synopsis: Client certificate format

    | Client certificate format

.. option:: allowed-ciphers
    :synopsis: Client certificate format

    | Client certificate format

.. option:: ssl
    :synopsis: Initial an ssl handshake with the server.

    | Initial an ssl handshake with the server.

.. option:: timeout
    :synopsis: 




:query:`nscp_submit`
--------------------
.. query:: nscp_submit
    :synopsis: Submit information to remote host via NSCP.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`host` |  | The host of the host running the server
    :option:`port` |  | The port of the host running the server
    :option:`address` |  | The address (host:port) of the host running the server
    :option:`timeout` |  | Number of seconds before connection times out (default=10)
    :option:`target` |  | Target to use (lookup connection info from config)
    :option:`retry` |  | Number of times ti retry a failed connection attempt (default=2)
    :option:`command` |  | The name of the command that the remote daemon should run
    :option:`alias` |  | Same as command
    :option:`message` |  | Message
    :option:`result` |  | Result code either a number or OK, WARN, CRIT, UNKNOWN
    :option:`no-ssl` | N/A | Do not initial an ssl handshake with the server, talk in plaintext.
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | Length of payload (has to be same as on the server)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format
    :option:`ca` |  | Certificate authority
    :option:`verify` |  | Client certificate format
    :option:`allowed-ciphers` |  | Client certificate format
    :option:`ssl` | N/A | Initial an ssl handshake with the server.
    :option:`timeout` |  | 


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: host
    :synopsis: The host of the host running the server

    | The host of the host running the server

.. option:: port
    :synopsis: The port of the host running the server

    | The port of the host running the server

.. option:: address
    :synopsis: The address (host:port) of the host running the server

    | The address (host:port) of the host running the server

.. option:: timeout
    :synopsis: Number of seconds before connection times out (default=10)

    | Number of seconds before connection times out (default=10)

.. option:: target
    :synopsis: Target to use (lookup connection info from config)

    | Target to use (lookup connection info from config)

.. option:: retry
    :synopsis: Number of times ti retry a failed connection attempt (default=2)

    | Number of times ti retry a failed connection attempt (default=2)

.. option:: command
    :synopsis: The name of the command that the remote daemon should run

    | The name of the command that the remote daemon should run

.. option:: alias
    :synopsis: Same as command

    | Same as command

.. option:: message
    :synopsis: Message

    | Message

.. option:: result
    :synopsis: Result code either a number or OK, WARN, CRIT, UNKNOWN

    | Result code either a number or OK, WARN, CRIT, UNKNOWN

.. option:: no-ssl
    :synopsis: Do not initial an ssl handshake with the server, talk in plaintext.

    | Do not initial an ssl handshake with the server, talk in plaintext.

.. option:: certificate
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: dh
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: certificate-key
    :synopsis: Client certificate to use

    | Client certificate to use

.. option:: certificate-format
    :synopsis: Client certificate format

    | Client certificate format

.. option:: ca
    :synopsis: Certificate authority

    | Certificate authority

.. option:: verify
    :synopsis: Client certificate format

    | Client certificate format

.. option:: allowed-ciphers
    :synopsis: Client certificate format

    | Client certificate format

.. option:: ssl
    :synopsis: Initial an ssl handshake with the server.

    | Initial an ssl handshake with the server.

.. option:: timeout
    :synopsis: 








/ settings/ nscp/ client
------------------------

.. confpath:: /settings/nscp/client
    :synopsis: NSCP CLIENT SECTION

    **NSCP CLIENT SECTION**

    | Section for NSCP active/passive check module.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`channel` | NSCP | CHANNEL

    **Sample**::

        # NSCP CLIENT SECTION
        # Section for NSCP active/passive check module.
        [/settings/nscp/client]
        channel=NSCP


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/nscp/client

        **Key**: channel

        **Default value**: NSCP

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client]
            # CHANNEL
            channel=NSCP




…  / handlers
-------------

.. confpath:: /settings/nscp/client/handlers
    :synopsis: CLIENT HANDLER SECTION

    **CLIENT HANDLER SECTION**






    **Sample**::

        # CLIENT HANDLER SECTION
        # 
        [/settings/nscp/client/handlers]




…  / targets
------------

.. confpath:: /settings/nscp/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

    **REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/nscp/client/targets]




…  / targets / default
----------------------

.. confpath:: /settings/nscp/client/targets/default
    :synopsis: TARGET DEFENITION

    **TARGET DEFENITION**

    | Target definition for: default


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`alias` |  | ALIAS
        :confkey:`allowed ciphers` | ADH | ALLOWED CIPHERS
        :confkey:`ca` |  | CA
        :confkey:`certificate` |  | SSL CERTIFICATE
        :confkey:`certificate format` | PEM | CERTIFICATE FORMAT
        :confkey:`certificate key` |  | SSL CERTIFICATE
        :confkey:`dh` | ${certificate-path}/nrpe_dh_512.pem | DH KEY
        :confkey:`host` |  | TARGET HOST
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT
        :confkey:`port` | 0 | TARGET PORT
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 1 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` | none | VERIFY MODE

    **Sample**::

        # TARGET DEFENITION
        # Target definition for: default
        [/settings/nscp/client/targets/default]
        address=
        alias=
        allowed ciphers=ADH
        ca=
        certificate=
        certificate format=PEM
        certificate key=
        dh=${certificate-path}/nrpe_dh_512.pem
        host=
        is template=0
        parent=default
        port=0
        timeout=30
        use ssl=1
        verify mode=none


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/nscp/client/targets/default

        **Key**: address

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # TARGET ADDRESS
            address=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/default

        **Key**: alias

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # ALIAS
            alias=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Path**: /settings/nscp/client/targets/default

        **Key**: allowed ciphers

        **Default value**: ADH

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # ALLOWED CIPHERS
            allowed ciphers=ADH


    .. confkey:: ca
        :synopsis: CA

        **CA**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/default

        **Key**: ca

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Path**: /settings/nscp/client/targets/default

        **Key**: certificate

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/default

        **Key**: certificate format

        **Default value**: PEM

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # CERTIFICATE FORMAT
            certificate format=PEM


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/default

        **Key**: certificate key

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # SSL CERTIFICATE
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/default

        **Key**: dh

        **Default value**: ${certificate-path}/nrpe_dh_512.pem

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # DH KEY
            dh=${certificate-path}/nrpe_dh_512.pem


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/default

        **Key**: host

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # TARGET HOST
            host=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/default

        **Key**: is template

        **Default value**: 0

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/default

        **Key**: parent

        **Default value**: default

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # PARENT
            parent=default


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/default

        **Key**: port

        **Default value**: 0

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # TARGET PORT
            port=0


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/nscp/client/targets/default

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # TIMEOUT
            timeout=30


    .. confkey:: use ssl
        :synopsis: ENABLE SSL ENCRYPTION

        **ENABLE SSL ENCRYPTION**

        | This option controls if SSL should be enabled.

        **Path**: /settings/nscp/client/targets/default

        **Key**: use ssl

        **Default value**: 1

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # ENABLE SSL ENCRYPTION
            use ssl=1


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**



        **Path**: /settings/nscp/client/targets/default

        **Key**: verify mode

        **Default value**: none

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/default]
            # VERIFY MODE
            verify mode=none




…  / targets / sample
---------------------

.. confpath:: /settings/nscp/client/targets/sample
    :synopsis: TARGET DEFENITION

    **TARGET DEFENITION**

    | Target definition for: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`alias` |  | ALIAS
        :confkey:`allowed ciphers` | ADH | ALLOWED CIPHERS
        :confkey:`ca` |  | CA
        :confkey:`certificate` |  | SSL CERTIFICATE
        :confkey:`certificate format` | PEM | CERTIFICATE FORMAT
        :confkey:`certificate key` |  | SSL CERTIFICATE
        :confkey:`dh` | ${certificate-path}/nrpe_dh_512.pem | DH KEY
        :confkey:`host` |  | TARGET HOST
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT
        :confkey:`port` | 0 | TARGET PORT
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 1 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` | none | VERIFY MODE

    **Sample**::

        # TARGET DEFENITION
        # Target definition for: sample
        [/settings/nscp/client/targets/sample]
        address=
        alias=
        allowed ciphers=ADH
        ca=
        certificate=
        certificate format=PEM
        certificate key=
        dh=${certificate-path}/nrpe_dh_512.pem
        host=
        is template=0
        parent=default
        port=0
        timeout=30
        use ssl=1
        verify mode=none


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/nscp/client/targets/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/sample

        **Key**: alias

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # ALIAS
            alias=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Path**: /settings/nscp/client/targets/sample

        **Key**: allowed ciphers

        **Default value**: ADH

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # ALLOWED CIPHERS
            allowed ciphers=ADH


    .. confkey:: ca
        :synopsis: CA

        **CA**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/sample

        **Key**: ca

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Path**: /settings/nscp/client/targets/sample

        **Key**: certificate

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/sample

        **Key**: certificate format

        **Default value**: PEM

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # CERTIFICATE FORMAT
            certificate format=PEM


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/sample

        **Key**: certificate key

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # SSL CERTIFICATE
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/sample

        **Key**: dh

        **Default value**: ${certificate-path}/nrpe_dh_512.pem

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # DH KEY
            dh=${certificate-path}/nrpe_dh_512.pem


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/sample

        **Key**: host

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # TARGET HOST
            host=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/sample

        **Key**: is template

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/sample

        **Key**: parent

        **Default value**: default

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # PARENT
            parent=default


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/client/targets/sample

        **Key**: port

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # TARGET PORT
            port=0


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/nscp/client/targets/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # TIMEOUT
            timeout=30


    .. confkey:: use ssl
        :synopsis: ENABLE SSL ENCRYPTION

        **ENABLE SSL ENCRYPTION**

        | This option controls if SSL should be enabled.

        **Path**: /settings/nscp/client/targets/sample

        **Key**: use ssl

        **Default value**: 1

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # ENABLE SSL ENCRYPTION
            use ssl=1


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**



        **Path**: /settings/nscp/client/targets/sample

        **Key**: verify mode

        **Default value**: none

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/nscp/client/targets/sample]
            # VERIFY MODE
            verify mode=none


