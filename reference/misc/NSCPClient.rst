.. default-domain:: nscp

.. module:: NSCPClient
    :synopsis: NSCP client can be used both from command line and from queries to check remote systes via NSCP (REST)

===================================
:module:`NSCPClient` --- NSCPClient
===================================
NSCP client can be used both from command line and from queries to check remote systes via NSCP (REST)

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_remote_nscp` | Request remote information via NSCP.
    :query:`exec_remote_nscp` | Execute remote script via NSCP.
    :query:`remote_nscp_query` | Request remote information via NSCP.
    :query:`remote_nscpforward` | Forward the request as-is to remote host via NSCP.
    :query:`submit_remote_nscp` | Submit information to remote host via NSCP.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/NSCP/client` | :confkey:`~/settings/NSCP/client.channel` | CHANNEL
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.password` | PASSWORD
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.retries` | RETRIES
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.timeout` | TIMEOUT
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.verify mode` | VERIFY MODE

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.ca` | CA
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.dh` | DH KEY
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/NSCP/client/targets/default` | :confkey:`~/settings/NSCP/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.ca` | CA
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.dh` | DH KEY
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.password` | PASSWORD
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.retries` | RETRIES
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.timeout` | TIMEOUT
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NSCP/client/targets/sample` | :confkey:`~/settings/NSCP/client/targets/sample.verify mode` | VERIFY MODE



Queries
=======
A quick reference for all available queries (check commands) in the NSCPClient module.

:query:`check_remote_nscp`
--------------------------
.. query:: check_remote_nscp
    :synopsis: Request remote information via NSCP.

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
    :option:`retries` |  | legacy version of retry
    :option:`source-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`sender-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`command` |  | The name of the command that the remote daemon should run
    :option:`argument` |  | Set command line arguments
    :option:`separator` |  | Separator to use for the batch command (default is |)
    :option:`batch` |  | Add multiple records using the separator format is: command|argument|argument
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | Length of payload (has to be same as on the server)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format
    :option:`ca` |  | Certificate authority
    :option:`verify` |  | Client certificate format
    :option:`allowed-ciphers` |  | Client certificate format
    :option:`ssl` | 1 | Initial an ssl handshake with the server.
    :option:`password` |  | Password




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

.. option:: retries
    :synopsis: legacy version of retry

    | legacy version of retry

.. option:: source-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: sender-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: command
    :synopsis: The name of the command that the remote daemon should run

    | The name of the command that the remote daemon should run

.. option:: argument
    :synopsis: Set command line arguments

    | Set command line arguments

.. option:: separator
    :synopsis: Separator to use for the batch command (default is |)

    | Separator to use for the batch command (default is |)

.. option:: batch
    :synopsis: Add multiple records using the separator format is: command|argument|argument

    | Add multiple records using the separator format is: command|argument|argument

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

.. option:: password
    :synopsis: Password

    | Password

:query:`exec_remote_nscp`
-------------------------
.. query:: exec_remote_nscp
    :synopsis: Execute remote script via NSCP.

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
    :option:`retries` |  | legacy version of retry
    :option:`source-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`sender-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`command` |  | The name of the command that the remote daemon should run
    :option:`argument` |  | Set command line arguments
    :option:`separator` |  | Separator to use for the batch command (default is |)
    :option:`batch` |  | Add multiple records using the separator format is: command|argument|argument
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | Length of payload (has to be same as on the server)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format
    :option:`ca` |  | Certificate authority
    :option:`verify` |  | Client certificate format
    :option:`allowed-ciphers` |  | Client certificate format
    :option:`ssl` | 1 | Initial an ssl handshake with the server.
    :option:`password` |  | Password




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

.. option:: retries
    :synopsis: legacy version of retry

    | legacy version of retry

.. option:: source-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: sender-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: command
    :synopsis: The name of the command that the remote daemon should run

    | The name of the command that the remote daemon should run

.. option:: argument
    :synopsis: Set command line arguments

    | Set command line arguments

.. option:: separator
    :synopsis: Separator to use for the batch command (default is |)

    | Separator to use for the batch command (default is |)

.. option:: batch
    :synopsis: Add multiple records using the separator format is: command|argument|argument

    | Add multiple records using the separator format is: command|argument|argument

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

.. option:: password
    :synopsis: Password

    | Password

:query:`remote_nscp_query`
--------------------------
.. query:: remote_nscp_query
    :synopsis: Request remote information via NSCP.

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
    :option:`retries` |  | legacy version of retry
    :option:`source-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`sender-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`command` |  | The name of the command that the remote daemon should run
    :option:`argument` |  | Set command line arguments
    :option:`separator` |  | Separator to use for the batch command (default is |)
    :option:`batch` |  | Add multiple records using the separator format is: command|argument|argument
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | Length of payload (has to be same as on the server)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format
    :option:`ca` |  | Certificate authority
    :option:`verify` |  | Client certificate format
    :option:`allowed-ciphers` |  | Client certificate format
    :option:`ssl` | 1 | Initial an ssl handshake with the server.
    :option:`password` |  | Password




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

.. option:: retries
    :synopsis: legacy version of retry

    | legacy version of retry

.. option:: source-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: sender-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: command
    :synopsis: The name of the command that the remote daemon should run

    | The name of the command that the remote daemon should run

.. option:: argument
    :synopsis: Set command line arguments

    | Set command line arguments

.. option:: separator
    :synopsis: Separator to use for the batch command (default is |)

    | Separator to use for the batch command (default is |)

.. option:: batch
    :synopsis: Add multiple records using the separator format is: command|argument|argument

    | Add multiple records using the separator format is: command|argument|argument

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

.. option:: password
    :synopsis: Password

    | Password

:query:`remote_nscpforward`
---------------------------
.. query:: remote_nscpforward
    :synopsis: Forward the request as-is to remote host via NSCP.

**Usage:**







Arguments
*********
:query:`submit_remote_nscp`
---------------------------
.. query:: submit_remote_nscp
    :synopsis: Submit information to remote host via NSCP.

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
    :option:`retries` |  | legacy version of retry
    :option:`source-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`sender-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`command` |  | The name of the command that the remote daemon should run
    :option:`alias` |  | Same as command
    :option:`message` |  | Message
    :option:`result` |  | Result code either a number or OK, WARN, CRIT, UNKNOWN
    :option:`separator` |  | Separator to use for the batch command (default is |)
    :option:`batch` |  | Add multiple records using the separator format is: command|result|message
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | Length of payload (has to be same as on the server)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format
    :option:`ca` |  | Certificate authority
    :option:`verify` |  | Client certificate format
    :option:`allowed-ciphers` |  | Client certificate format
    :option:`ssl` | 1 | Initial an ssl handshake with the server.
    :option:`password` |  | Password




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

.. option:: retries
    :synopsis: legacy version of retry

    | legacy version of retry

.. option:: source-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: sender-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

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

.. option:: separator
    :synopsis: Separator to use for the batch command (default is |)

    | Separator to use for the batch command (default is |)

.. option:: batch
    :synopsis: Add multiple records using the separator format is: command|result|message

    | Add multiple records using the separator format is: command|result|message

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

.. option:: password
    :synopsis: Password

    | Password





/ settings/ NSCP/ client
------------------------

.. confpath:: /settings/NSCP/client
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
        [/settings/NSCP/client]
        channel=NSCP


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/NSCP/client

        **Key**: channel

        **Default value**: NSCP

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client]
            # CHANNEL
            channel=NSCP




…  / handlers
-------------

.. confpath:: /settings/NSCP/client/handlers
    :synopsis: CLIENT HANDLER SECTION

**CLIENT HANDLER SECTION**






    **Sample**::

        # CLIENT HANDLER SECTION
        # 
        [/settings/NSCP/client/handlers]




…  / targets
------------

.. confpath:: /settings/NSCP/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

**REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/NSCP/client/targets]




…  / targets / default
----------------------

.. confpath:: /settings/NSCP/client/targets/default
    :synopsis: TARGET

**TARGET**

    | Target definition for: default


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`allowed ciphers` |  | ALLOWED CIPHERS
        :confkey:`ca` |  | CA
        :confkey:`certificate` |  | SSL CERTIFICATE
        :confkey:`certificate format` |  | CERTIFICATE FORMAT
        :confkey:`certificate key` |  | SSL CERTIFICATE
        :confkey:`dh` |  | DH KEY
        :confkey:`host` |  | TARGET HOST
        :confkey:`password` |  | PASSWORD
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 0 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` |  | VERIFY MODE

    **Sample**::

        # TARGET
        # Target definition for: default
        [/settings/NSCP/client/targets/default]
        address=
        allowed ciphers=
        ca=
        certificate=
        certificate format=
        certificate key=
        dh=
        host=
        password=
        port=
        retries=3
        timeout=30
        use ssl=0
        verify mode=


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/NSCP/client/targets/default

        **Key**: address

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # TARGET ADDRESS
            address=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Path**: /settings/NSCP/client/targets/default

        **Key**: allowed ciphers

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # ALLOWED CIPHERS
            allowed ciphers=


    .. confkey:: ca
        :synopsis: CA

        **CA**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/default

        **Key**: ca

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Path**: /settings/NSCP/client/targets/default

        **Key**: certificate

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/default

        **Key**: certificate format

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # CERTIFICATE FORMAT
            certificate format=


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/default

        **Key**: certificate key

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # SSL CERTIFICATE
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/default

        **Key**: dh

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # DH KEY
            dh=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/default

        **Key**: host

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # TARGET HOST
            host=


    .. confkey:: password
        :synopsis: PASSWORD

        **PASSWORD**

        | The password to use to authenticate towards the server.

        **Path**: /settings/NSCP/client/targets/default

        **Key**: password

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # PASSWORD
            password=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/default

        **Key**: port

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/NSCP/client/targets/default

        **Key**: retries

        **Default value**: 3

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/NSCP/client/targets/default

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # TIMEOUT
            timeout=30


    .. confkey:: use ssl
        :synopsis: ENABLE SSL ENCRYPTION

        **ENABLE SSL ENCRYPTION**

        | This option controls if SSL should be enabled.

        **Path**: /settings/NSCP/client/targets/default

        **Key**: use ssl

        **Default value**: 0

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # ENABLE SSL ENCRYPTION
            use ssl=0


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**



        **Path**: /settings/NSCP/client/targets/default

        **Key**: verify mode

        **Default value**: 

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/default]
            # VERIFY MODE
            verify mode=




…  / targets / sample
---------------------

.. confpath:: /settings/NSCP/client/targets/sample
    :synopsis: TARGET

**TARGET**

    | Target definition for: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`allowed ciphers` |  | ALLOWED CIPHERS
        :confkey:`ca` |  | CA
        :confkey:`certificate` |  | SSL CERTIFICATE
        :confkey:`certificate format` |  | CERTIFICATE FORMAT
        :confkey:`certificate key` |  | SSL CERTIFICATE
        :confkey:`dh` |  | DH KEY
        :confkey:`host` |  | TARGET HOST
        :confkey:`password` |  | PASSWORD
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 0 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` |  | VERIFY MODE

    **Sample**::

        # TARGET
        # Target definition for: sample
        [/settings/NSCP/client/targets/sample]
        address=
        allowed ciphers=
        ca=
        certificate=
        certificate format=
        certificate key=
        dh=
        host=
        password=
        port=
        retries=3
        timeout=30
        use ssl=0
        verify mode=


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: allowed ciphers

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # ALLOWED CIPHERS
            allowed ciphers=


    .. confkey:: ca
        :synopsis: CA

        **CA**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: ca

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Path**: /settings/NSCP/client/targets/sample

        **Key**: certificate

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: certificate format

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # CERTIFICATE FORMAT
            certificate format=


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: certificate key

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # SSL CERTIFICATE
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: dh

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # DH KEY
            dh=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: host

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # TARGET HOST
            host=


    .. confkey:: password
        :synopsis: PASSWORD

        **PASSWORD**

        | The password to use to authenticate towards the server.

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: password

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # PASSWORD
            password=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: port

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: retries

        **Default value**: 3

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # TIMEOUT
            timeout=30


    .. confkey:: use ssl
        :synopsis: ENABLE SSL ENCRYPTION

        **ENABLE SSL ENCRYPTION**

        | This option controls if SSL should be enabled.

        **Path**: /settings/NSCP/client/targets/sample

        **Key**: use ssl

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # ENABLE SSL ENCRYPTION
            use ssl=0


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**



        **Path**: /settings/NSCP/client/targets/sample

        **Key**: verify mode

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCPClient`

        **Sample**::

            [/settings/NSCP/client/targets/sample]
            # VERIFY MODE
            verify mode=


