.. default-domain:: nscp

.. module:: NRPEClient
    :synopsis: NRPE client can be used both from command line and from queries to check remote systes via NRPE as well as configure the NRPE server

===================================
:module:`NRPEClient` --- NRPEClient
===================================
NRPE client can be used both from command line and from queries to check remote systes via NRPE as well as configure the NRPE server

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_nrpe` | Request remote information via NRPE.
    :query:`exec_nrpe` | Execute remote script via NRPE. (Most likely you want nrpe_query).
    :query:`nrpe_forward` | Forward the request as-is to remote host via NRPE.
    :query:`nrpe_query` | Request remote information via NRPE.
    :query:`submit_nrpe` | Submit information to remote host via NRPE. (Most likely you want nrpe_query).




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
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.insecure` | Insecure legacy mode
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.retries` | RETRIES
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.timeout` | TIMEOUT
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.verify mode` | VERIFY MODE

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.ca` | CA
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.dh` | DH KEY
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/NRPE/client/targets/default` | :confkey:`~/settings/NRPE/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.ca` | CA
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.dh` | DH KEY
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.insecure` | Insecure legacy mode
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.retries` | RETRIES
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.timeout` | TIMEOUT
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NRPE/client/targets/sample` | :confkey:`~/settings/NRPE/client/targets/sample.verify mode` | VERIFY MODE



Queries
=======
A quick reference for all available queries (check commands) in the NRPEClient module.

:query:`check_nrpe`
-------------------
.. query:: check_nrpe
    :synopsis: Request remote information via NRPE.

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
    :option:`insecure` | N/A | Use insecure legacy mode
    :option:`payload-length` |  | Length of payload (has to be same as on the server)
    :option:`buffer-length` |  | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.




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

.. option:: insecure
    :synopsis: Use insecure legacy mode

    | Use insecure legacy mode

.. option:: payload-length
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: buffer-length
    :synopsis: Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

    | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

:query:`exec_nrpe`
------------------
.. query:: exec_nrpe
    :synopsis: Execute remote script via NRPE. (Most likely you want nrpe_query).

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
    :option:`insecure` | N/A | Use insecure legacy mode
    :option:`payload-length` |  | Length of payload (has to be same as on the server)
    :option:`buffer-length` |  | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.




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

.. option:: insecure
    :synopsis: Use insecure legacy mode

    | Use insecure legacy mode

.. option:: payload-length
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: buffer-length
    :synopsis: Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

    | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

:query:`nrpe_forward`
---------------------
.. query:: nrpe_forward
    :synopsis: Forward the request as-is to remote host via NRPE.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`*` |  | 




Arguments
*********
.. option:: *
    :synopsis: 



:query:`nrpe_query`
-------------------
.. query:: nrpe_query
    :synopsis: Request remote information via NRPE.

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
    :option:`insecure` | N/A | Use insecure legacy mode
    :option:`payload-length` |  | Length of payload (has to be same as on the server)
    :option:`buffer-length` |  | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.




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

.. option:: insecure
    :synopsis: Use insecure legacy mode

    | Use insecure legacy mode

.. option:: payload-length
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: buffer-length
    :synopsis: Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

    | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

:query:`submit_nrpe`
--------------------
.. query:: submit_nrpe
    :synopsis: Submit information to remote host via NRPE. (Most likely you want nrpe_query).

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
    :option:`insecure` | N/A | Use insecure legacy mode
    :option:`payload-length` |  | Length of payload (has to be same as on the server)
    :option:`buffer-length` |  | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.




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

.. option:: insecure
    :synopsis: Use insecure legacy mode

    | Use insecure legacy mode

.. option:: payload-length
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: buffer-length
    :synopsis: Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

    | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.





/ settings/ NRPE/ client
------------------------

.. confpath:: /settings/NRPE/client
    :synopsis: NRPE CLIENT SECTION

**NRPE CLIENT SECTION**

    | Section for NRPE active/passive check module.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`channel` | NRPE | CHANNEL

    **Sample**::

        # NRPE CLIENT SECTION
        # Section for NRPE active/passive check module.
        [/settings/NRPE/client]
        channel=NRPE


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/NRPE/client

        **Key**: channel

        **Default value**: NRPE

        **Used by**: :module:`NRPEClient`

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
        :confkey:`insecure` |  | Insecure legacy mode
        :confkey:`payload length` | 0 | PAYLOAD LENGTH
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 0 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` |  | VERIFY MODE

    **Sample**::

        # TARGET
        # Target definition for: default
        [/settings/NRPE/client/targets/default]
        address=
        allowed ciphers=
        ca=
        certificate=
        certificate format=
        certificate key=
        dh=
        host=
        insecure=
        payload length=0
        port=
        retries=3
        timeout=30
        use ssl=0
        verify mode=


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/NRPE/client/targets/default

        **Key**: address

        **Default value**: 

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # TARGET ADDRESS
            address=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Path**: /settings/NRPE/client/targets/default

        **Key**: allowed ciphers

        **Default value**: 

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # ALLOWED CIPHERS
            allowed ciphers=


    .. confkey:: ca
        :synopsis: CA

        **CA**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: ca

        **Default value**: 

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Path**: /settings/NRPE/client/targets/default

        **Key**: certificate

        **Default value**: 

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: certificate format

        **Default value**: 

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # CERTIFICATE FORMAT
            certificate format=


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: certificate key

        **Default value**: 

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # SSL CERTIFICATE
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: dh

        **Default value**: 

        **Used by**: :module:`NRPEClient`

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

        **Used by**: :module:`NRPEClient`

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

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # Insecure legacy mode
            insecure=


    .. confkey:: payload length
        :synopsis: PAYLOAD LENGTH

        **PAYLOAD LENGTH**

        | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

        **Path**: /settings/NRPE/client/targets/default

        **Key**: payload length

        **Default value**: 0

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # PAYLOAD LENGTH
            payload length=0


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/default

        **Key**: port

        **Default value**: 

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/NRPE/client/targets/default

        **Key**: retries

        **Default value**: 3

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/NRPE/client/targets/default

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`NRPEClient`

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

        **Default value**: 0

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # ENABLE SSL ENCRYPTION
            use ssl=0


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**



        **Path**: /settings/NRPE/client/targets/default

        **Key**: verify mode

        **Default value**: 

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/default]
            # VERIFY MODE
            verify mode=




…  / targets / sample
---------------------

.. confpath:: /settings/NRPE/client/targets/sample
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
        :confkey:`insecure` |  | Insecure legacy mode
        :confkey:`payload length` | 0 | PAYLOAD LENGTH
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 0 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` |  | VERIFY MODE

    **Sample**::

        # TARGET
        # Target definition for: sample
        [/settings/NRPE/client/targets/sample]
        address=
        allowed ciphers=
        ca=
        certificate=
        certificate format=
        certificate key=
        dh=
        host=
        insecure=
        payload length=0
        port=
        retries=3
        timeout=30
        use ssl=0
        verify mode=


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: allowed ciphers

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # ALLOWED CIPHERS
            allowed ciphers=


    .. confkey:: ca
        :synopsis: CA

        **CA**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: ca

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Path**: /settings/NRPE/client/targets/sample

        **Key**: certificate

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: certificate format

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # CERTIFICATE FORMAT
            certificate format=


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: certificate key

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # SSL CERTIFICATE
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: dh

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

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

        **Used by**: :module:`NRPEClient`

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

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # Insecure legacy mode
            insecure=


    .. confkey:: payload length
        :synopsis: PAYLOAD LENGTH

        **PAYLOAD LENGTH**

        | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: payload length

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # PAYLOAD LENGTH
            payload length=0


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: port

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: retries

        **Default value**: 3

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/NRPE/client/targets/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

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

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # ENABLE SSL ENCRYPTION
            use ssl=0


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**



        **Path**: /settings/NRPE/client/targets/sample

        **Key**: verify mode

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRPEClient`

        **Sample**::

            [/settings/NRPE/client/targets/sample]
            # VERIFY MODE
            verify mode=


