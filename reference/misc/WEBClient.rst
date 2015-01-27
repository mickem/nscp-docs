.. default-domain:: nscp

.. module:: WEBClient
    :synopsis: WEB client can be used both from command line and from queries to check remote systes via WEB(REST)

=================================
:module:`WEBClient` --- WEBClient
=================================
WEB client can be used both from command line and from queries to check remote systes via WEB(REST)

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`web_exec` | Execute remote script via WEB.
    :query:`web_forward` | Forward the request as-is to remote host via WEB.
    :query:`web_query` | Request remote information via WEB.
    :query:`web_submit` | Submit information to remote host via WEB.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/NRPE/client` | :confkey:`~/settings/NRPE/client.channel` | CHANNEL
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.certificate key` | SSL CERTIFICATE KEY
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.insecure` | Insecure legacy mode
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.timeout` | TIMEOUT
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.verify mode` | VERIFY MODE

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.alias` | ALIAS
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.ca` | CA
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.dh` | DH KEY
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.is template` | IS TEMPLATE
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.parent` | PARENT
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.alias` | ALIAS
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.ca` | CA
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.certificate key` | SSL CERTIFICATE KEY
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.dh` | DH KEY
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.insecure` | Insecure legacy mode
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.is template` | IS TEMPLATE
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.parent` | PARENT
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.timeout` | TIMEOUT
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.verify mode` | VERIFY MODE


Queries
=======
A quick reference for all available queries (check commands) in the WEBClient module.

:query:`web_exec`
-----------------
.. query:: web_exec
    :synopsis: Execute remote script via WEB.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`host` |  | The host of the host running the server
    :option:`port` |  | The port of the host running the server
    :option:`address` |  | The address (host:port) of the host running the server
    :option:`timeout` |  | Number of seconds before connection times out (default=10)
    :option:`target` |  | Target to use (lookup connection info from config)
    :option:`retry` |  | Number of times ti retry a failed connection attempt (default=2)
    :option:`command` |  | The name of the command that the remote daemon should run
    :option:`arguments` |  | list of arguments
    :option:`no-ssl` | N/A | Do not initial an ssl handshake with the server, talk in plain-text.
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | The pre-generated DH key (if ADH is used this will be your 'key' though it is not a secret key)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format (default is PEM)
    :option:`insecure` | N/A | Use insecure legacy mode
    :option:`ca` |  | A file representing the Certificate authority used to validate peer certificates
    :option:`verify` |  | Which verification mode to use: none: no verification, peer: that peer has a certificate, peer-cert: that peer has a valid certificate, ...
    :option:`allowed-ciphers` |  | Which ciphers are allowed for legacy reasons this defaults to ADH which is not secure preferably set this to DEFAULT which is better or a an even stronger cipher
    :option:`payload-length` |  | Length of payload (has to be same as on the server)
    :option:`buffer-length` |  | Same as payload-length (used for legacy reasons)
    :option:`ssl` | N/A | Initial an ssl handshake with the server.




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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
    :synopsis: Do not initial an ssl handshake with the server, talk in plain-text.

    | Do not initial an ssl handshake with the server, talk in plain-text.

.. option:: certificate
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: dh
    :synopsis: The pre-generated DH key (if ADH is used this will be your 'key' though it is not a secret key)

    | The pre-generated DH key (if ADH is used this will be your 'key' though it is not a secret key)

.. option:: certificate-key
    :synopsis: Client certificate to use

    | Client certificate to use

.. option:: certificate-format
    :synopsis: Client certificate format (default is PEM)

    | Client certificate format (default is PEM)

.. option:: insecure
    :synopsis: Use insecure legacy mode

    | Use insecure legacy mode

.. option:: ca
    :synopsis: A file representing the Certificate authority used to validate peer certificates

    | A file representing the Certificate authority used to validate peer certificates

.. option:: verify
    :synopsis: Which verification mode to use: none: no verification, peer: that peer has a certificate, peer-cert: that peer has a valid certificate, ...

    | Which verification mode to use: none: no verification, peer: that peer has a certificate, peer-cert: that peer has a valid certificate, ...

.. option:: allowed-ciphers
    :synopsis: Which ciphers are allowed for legacy reasons this defaults to ADH which is not secure preferably set this to DEFAULT which is better or a an even stronger cipher

    | Which ciphers are allowed for legacy reasons this defaults to ADH which is not secure preferably set this to DEFAULT which is better or a an even stronger cipher

.. option:: payload-length
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: buffer-length
    :synopsis: Same as payload-length (used for legacy reasons)

    | Same as payload-length (used for legacy reasons)

.. option:: ssl
    :synopsis: Initial an ssl handshake with the server.

    | Initial an ssl handshake with the server.

:query:`web_forward`
--------------------
.. query:: web_forward
    :synopsis: Forward the request as-is to remote host via WEB.

**Usage:**







Arguments
*********
:query:`web_query`
------------------
.. query:: web_query
    :synopsis: Request remote information via WEB.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
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
    :option:`no-ssl` | N/A | Do not initial an ssl handshake with the server, talk in plain-text.
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | The pre-generated DH key (if ADH is used this will be your 'key' though it is not a secret key)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format (default is PEM)
    :option:`insecure` | N/A | Use insecure legacy mode
    :option:`ca` |  | A file representing the Certificate authority used to validate peer certificates
    :option:`verify` |  | Which verification mode to use: none: no verification, peer: that peer has a certificate, peer-cert: that peer has a valid certificate, ...
    :option:`allowed-ciphers` |  | Which ciphers are allowed for legacy reasons this defaults to ADH which is not secure preferably set this to DEFAULT which is better or a an even stronger cipher
    :option:`payload-length` |  | Length of payload (has to be same as on the server)
    :option:`buffer-length` |  | Same as payload-length (used for legacy reasons)
    :option:`ssl` | N/A | Initial an ssl handshake with the server.




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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
    :synopsis: Do not initial an ssl handshake with the server, talk in plain-text.

    | Do not initial an ssl handshake with the server, talk in plain-text.

.. option:: certificate
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: dh
    :synopsis: The pre-generated DH key (if ADH is used this will be your 'key' though it is not a secret key)

    | The pre-generated DH key (if ADH is used this will be your 'key' though it is not a secret key)

.. option:: certificate-key
    :synopsis: Client certificate to use

    | Client certificate to use

.. option:: certificate-format
    :synopsis: Client certificate format (default is PEM)

    | Client certificate format (default is PEM)

.. option:: insecure
    :synopsis: Use insecure legacy mode

    | Use insecure legacy mode

.. option:: ca
    :synopsis: A file representing the Certificate authority used to validate peer certificates

    | A file representing the Certificate authority used to validate peer certificates

.. option:: verify
    :synopsis: Which verification mode to use: none: no verification, peer: that peer has a certificate, peer-cert: that peer has a valid certificate, ...

    | Which verification mode to use: none: no verification, peer: that peer has a certificate, peer-cert: that peer has a valid certificate, ...

.. option:: allowed-ciphers
    :synopsis: Which ciphers are allowed for legacy reasons this defaults to ADH which is not secure preferably set this to DEFAULT which is better or a an even stronger cipher

    | Which ciphers are allowed for legacy reasons this defaults to ADH which is not secure preferably set this to DEFAULT which is better or a an even stronger cipher

.. option:: payload-length
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: buffer-length
    :synopsis: Same as payload-length (used for legacy reasons)

    | Same as payload-length (used for legacy reasons)

.. option:: ssl
    :synopsis: Initial an ssl handshake with the server.

    | Initial an ssl handshake with the server.

:query:`web_submit`
-------------------
.. query:: web_submit
    :synopsis: Submit information to remote host via WEB.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
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
    :option:`no-ssl` | N/A | Do not initial an ssl handshake with the server, talk in plain-text.
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | The pre-generated DH key (if ADH is used this will be your 'key' though it is not a secret key)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format (default is PEM)
    :option:`insecure` | N/A | Use insecure legacy mode
    :option:`ca` |  | A file representing the Certificate authority used to validate peer certificates
    :option:`verify` |  | Which verification mode to use: none: no verification, peer: that peer has a certificate, peer-cert: that peer has a valid certificate, ...
    :option:`allowed-ciphers` |  | Which ciphers are allowed for legacy reasons this defaults to ADH which is not secure preferably set this to DEFAULT which is better or a an even stronger cipher
    :option:`payload-length` |  | Length of payload (has to be same as on the server)
    :option:`buffer-length` |  | Same as payload-length (used for legacy reasons)
    :option:`ssl` | N/A | Initial an ssl handshake with the server.




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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
    :synopsis: Do not initial an ssl handshake with the server, talk in plain-text.

    | Do not initial an ssl handshake with the server, talk in plain-text.

.. option:: certificate
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: dh
    :synopsis: The pre-generated DH key (if ADH is used this will be your 'key' though it is not a secret key)

    | The pre-generated DH key (if ADH is used this will be your 'key' though it is not a secret key)

.. option:: certificate-key
    :synopsis: Client certificate to use

    | Client certificate to use

.. option:: certificate-format
    :synopsis: Client certificate format (default is PEM)

    | Client certificate format (default is PEM)

.. option:: insecure
    :synopsis: Use insecure legacy mode

    | Use insecure legacy mode

.. option:: ca
    :synopsis: A file representing the Certificate authority used to validate peer certificates

    | A file representing the Certificate authority used to validate peer certificates

.. option:: verify
    :synopsis: Which verification mode to use: none: no verification, peer: that peer has a certificate, peer-cert: that peer has a valid certificate, ...

    | Which verification mode to use: none: no verification, peer: that peer has a certificate, peer-cert: that peer has a valid certificate, ...

.. option:: allowed-ciphers
    :synopsis: Which ciphers are allowed for legacy reasons this defaults to ADH which is not secure preferably set this to DEFAULT which is better or a an even stronger cipher

    | Which ciphers are allowed for legacy reasons this defaults to ADH which is not secure preferably set this to DEFAULT which is better or a an even stronger cipher

.. option:: payload-length
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: buffer-length
    :synopsis: Same as payload-length (used for legacy reasons)

    | Same as payload-length (used for legacy reasons)

.. option:: ssl
    :synopsis: Initial an ssl handshake with the server.

    | Initial an ssl handshake with the server.





/ settings/ NRPE/ client
------------------------

.. confpath:: /settings/NRPE/client
    :synopsis: WEB CLIENT SECTION

**WEB CLIENT SECTION**

    | Section for WEB active/passive check module.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`channel` | NRPE | CHANNEL

    **Sample**::

        # WEB CLIENT SECTION
        # Section for WEB active/passive check module.
        [/settings/NRPE/client]
        channel=NRPE


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/NRPE/client

        **Key**: channel

        **Default value**: NRPE

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client]
            # CHANNEL
            channel=NRPE




…  / handlers
-------------

.. confpath:: /settings/NRPE/client/handlers
    :synopsis: CLIENT HANDLER SECTION

**CLIENT HANDLER SECTION**






    **Sample**::

        # CLIENT HANDLER SECTION
        # 
        [/settings/NRPE/client/handlers]




…  / targets
------------

.. confpath:: /settings/NRPE/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

**REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/NRPE/client/targets]




…  / targets / default
----------------------

.. confpath:: /settings/NRPE/client/targets/default
    :synopsis: TARGET DEFENITION

**TARGET DEFENITION**

    | Target definition for: default


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`alias` |  | ALIAS
        :confkey:`allowed ciphers` | ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH | ALLOWED CIPHERS
        :confkey:`ca` |  | CA
        :confkey:`certificate` |  | SSL CERTIFICATE
        :confkey:`certificate format` | PEM | CERTIFICATE FORMAT
        :confkey:`certificate key` |  | SSL CERTIFICATE KEY
        :confkey:`dh` |  | DH KEY
        :confkey:`host` |  | TARGET HOST
        :confkey:`insecure` |  | Insecure legacy mode
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT
        :confkey:`payload length` | 1024 | PAYLOAD LENGTH
        :confkey:`port` | 0 | TARGET PORT
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 1 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` | none | VERIFY MODE

    **Sample**::

        # TARGET DEFENITION
        # Target definition for: default
        [/settings/NRPE/client/targets/default]
        address=
        alias=
        allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
        ca=
        certificate=
        certificate format=PEM
        certificate key=
        dh=
        host=
        insecure=
        is template=0
        parent=default
        payload length=1024
        port=0
        timeout=30
        use ssl=1
        verify mode=none


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/NRPE/client/targets/default

        **Key**: address

        **Default value**: 

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # TARGET ADDRESS
            address=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: alias

        **Default value**: 

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # ALIAS
            alias=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | The allowed list of ciphers (setting insecure wil override this to only support ADH

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: allowed ciphers

        **Default value**: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # ALLOWED CIPHERS
            allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH


    .. confkey:: ca
        :synopsis: CA

        **CA**

        | The certificate authority to use to authenticate remote certificate

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: ca

        **Default value**: 

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**

        | The ssl certificate to use to encrypt the communication

        **Path**: /settings/NRPE/client/targets/default

        **Key**: certificate

        **Default value**: 

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**

        | Format of SSL certificate

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: certificate format

        **Default value**: PEM

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # CERTIFICATE FORMAT
            certificate format=PEM


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE KEY

        **SSL CERTIFICATE KEY**

        | Key for the SSL certificate

        **Path**: /settings/NRPE/client/targets/default

        **Key**: certificate key

        **Default value**: 

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # SSL CERTIFICATE KEY
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**

        | The diffi-hellman perfect forwarded secret to use setting --insecure will override this

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: dh

        **Default value**: 

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # DH KEY
            dh=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: host

        **Default value**: 

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # TARGET HOST
            host=


    .. confkey:: insecure
        :synopsis: Insecure legacy mode

        **Insecure legacy mode**

        | Use insecure legacy mode to connect to old NRPE server

        **Path**: /settings/NRPE/client/targets/default

        **Key**: insecure

        **Default value**: 

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # Insecure legacy mode
            insecure=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: is template

        **Default value**: 0

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: parent

        **Default value**: default

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # PARENT
            parent=default


    .. confkey:: payload length
        :synopsis: PAYLOAD LENGTH

        **PAYLOAD LENGTH**

        | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

        **Path**: /settings/NRPE/client/targets/default

        **Key**: payload length

        **Default value**: 1024

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # PAYLOAD LENGTH
            payload length=1024


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: port

        **Default value**: 0

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # TARGET PORT
            port=0


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/NRPE/client/targets/default

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # TIMEOUT
            timeout=30


    .. confkey:: use ssl
        :synopsis: ENABLE SSL ENCRYPTION

        **ENABLE SSL ENCRYPTION**

        | This option controls if SSL should be enabled.

        **Path**: /settings/NRPE/client/targets/default

        **Key**: use ssl

        **Default value**: 1

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # ENABLE SSL ENCRYPTION
            use ssl=1


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**

        | What to verify default is non, to validate remote certificate use remote-peer

        **Path**: /settings/NRPE/client/targets/default

        **Key**: verify mode

        **Default value**: none

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # VERIFY MODE
            verify mode=none




…  / targets / sample
---------------------

.. confpath:: /settings/NRPE/client/targets/sample
    :synopsis: TARGET DEFENITION

**TARGET DEFENITION**

    | Target definition for: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`alias` |  | ALIAS
        :confkey:`allowed ciphers` | ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH | ALLOWED CIPHERS
        :confkey:`ca` |  | CA
        :confkey:`certificate` |  | SSL CERTIFICATE
        :confkey:`certificate format` | PEM | CERTIFICATE FORMAT
        :confkey:`certificate key` |  | SSL CERTIFICATE KEY
        :confkey:`dh` |  | DH KEY
        :confkey:`host` |  | TARGET HOST
        :confkey:`insecure` |  | Insecure legacy mode
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT
        :confkey:`payload length` | 1024 | PAYLOAD LENGTH
        :confkey:`port` | 0 | TARGET PORT
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 1 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` | none | VERIFY MODE

    **Sample**::

        # TARGET DEFENITION
        # Target definition for: sample
        [/settings/NRPE/client/targets/sample]
        address=
        alias=
        allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
        ca=
        certificate=
        certificate format=PEM
        certificate key=
        dh=
        host=
        insecure=
        is template=0
        parent=default
        payload length=1024
        port=0
        timeout=30
        use ssl=1
        verify mode=none


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: alias

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # ALIAS
            alias=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | The allowed list of ciphers (setting insecure wil override this to only support ADH

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: allowed ciphers

        **Default value**: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # ALLOWED CIPHERS
            allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH


    .. confkey:: ca
        :synopsis: CA

        **CA**

        | The certificate authority to use to authenticate remote certificate

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: ca

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**

        | The ssl certificate to use to encrypt the communication

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: certificate

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**

        | Format of SSL certificate

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: certificate format

        **Default value**: PEM

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # CERTIFICATE FORMAT
            certificate format=PEM


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE KEY

        **SSL CERTIFICATE KEY**

        | Key for the SSL certificate

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: certificate key

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # SSL CERTIFICATE KEY
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**

        | The diffi-hellman perfect forwarded secret to use setting --insecure will override this

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: dh

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # DH KEY
            dh=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: host

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # TARGET HOST
            host=


    .. confkey:: insecure
        :synopsis: Insecure legacy mode

        **Insecure legacy mode**

        | Use insecure legacy mode to connect to old NRPE server

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: insecure

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # Insecure legacy mode
            insecure=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: is template

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: parent

        **Default value**: default

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # PARENT
            parent=default


    .. confkey:: payload length
        :synopsis: PAYLOAD LENGTH

        **PAYLOAD LENGTH**

        | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: payload length

        **Default value**: 1024

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # PAYLOAD LENGTH
            payload length=1024


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: port

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # TARGET PORT
            port=0


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # TIMEOUT
            timeout=30


    .. confkey:: use ssl
        :synopsis: ENABLE SSL ENCRYPTION

        **ENABLE SSL ENCRYPTION**

        | This option controls if SSL should be enabled.

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: use ssl

        **Default value**: 1

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # ENABLE SSL ENCRYPTION
            use ssl=1


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**

        | What to verify default is non, to validate remote certificate use remote-peer

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: verify mode

        **Default value**: none

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`,  :module:`WEBClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # VERIFY MODE
            verify mode=none


