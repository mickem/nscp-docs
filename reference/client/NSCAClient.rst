.. default-domain:: nscp

.. module:: NSCAClient
    :synopsis: NSCA client can be used both from command line and from queries to submit passive checks via NSCA

===================================
:module:`NSCAClient` --- NSCAClient
===================================
NSCA client can be used both from command line and from queries to submit passive checks via NSCA

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`submit_nsca` | Submit information to the remote NSCA server.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/NSCA/client` | :confkey:`~/settings/NSCA/client.channel` | CHANNEL
    :confpath:`/settings/NSCA/client` | :confkey:`~/settings/NSCA/client.hostname` | HOSTNAME
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.encryption` | ENCRYPTION
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.password` | PASSWORD
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.retries` | RETRIES
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.timeout` | TIMEOUT
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.verify mode` | VERIFY MODE

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NSCA/client` | :confkey:`~/settings/NSCA/client.encoding` | NSCA DATA ENCODING
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.ca` | CA
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.dh` | DH KEY
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.encoding` | ENCODING
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.port` | TARGET PORT
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.time offset` | TIME OFFSET

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.ca` | CA
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.dh` | DH KEY
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.encoding` | ENCODING
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.encryption` | ENCRYPTION
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.password` | PASSWORD
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.retries` | RETRIES
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.time offset` | TIME OFFSET
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.timeout` | TIMEOUT
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.verify mode` | VERIFY MODE



Queries
=======
A quick reference for all available queries (check commands) in the NSCAClient module.

:query:`submit_nsca`
--------------------
.. query:: submit_nsca
    :synopsis: Submit information to the remote NSCA server.

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
    :option:`encryption` |  | Name of encryption algorithm to use.
    :option:`payload-length` |  | Length of payload (has to be same as on the server)
    :option:`buffer-length` |  | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.
    :option:`password` |  | Password
    :option:`time-offset` |  | 




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

.. option:: encryption
    :synopsis: Name of encryption algorithm to use.

    | Name of encryption algorithm to use.
    | Has to be the same as your server i using or it wont work at all.This is also independent of SSL and generally used instead of SSL.
    | Available encryption algorithms are:
    | none = No Encryption (not safe)
    | xor = XOR
    | des = DES
    | 3des = DES-EDE3
    | cast128 = CAST-128
    | xtea = XTEA
    | blowfish = Blowfish
    | twofish = Twofish
    | rc2 = RC2
    | aes128 = AES
    | aes192 = AES
    | aes = AES
    | serpent = Serpent
    | gost = GOST

.. option:: payload-length
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: buffer-length
    :synopsis: Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

    | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

.. option:: password
    :synopsis: Password

    | Password

.. option:: time-offset
    :synopsis: 







/ settings/ NSCA/ client
------------------------

.. confpath:: /settings/NSCA/client
    :synopsis: NSCA CLIENT SECTION

**NSCA CLIENT SECTION**

    | Section for NSCA passive check module.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`channel` | NSCA | CHANNEL
        :confkey:`encoding` |  | NSCA DATA ENCODING
        :confkey:`hostname` | auto | HOSTNAME

    **Sample**::

        # NSCA CLIENT SECTION
        # Section for NSCA passive check module.
        [/settings/NSCA/client]
        channel=NSCA
        encoding=
        hostname=auto


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/NSCA/client

        **Key**: channel

        **Default value**: NSCA

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client]
            # CHANNEL
            channel=NSCA


    .. confkey:: encoding
        :synopsis: NSCA DATA ENCODING

        **NSCA DATA ENCODING**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client

        **Key**: encoding

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client]
            # NSCA DATA ENCODING
            encoding=


    .. confkey:: hostname
        :synopsis: HOSTNAME

        **HOSTNAME**

        | The host name of the monitored computer.
        | Set this to auto (default) to use the windows name of the computer.
        | 
        | auto	Hostname
        | ${host}	Hostname
        | ${host_lc}
        | Hostname in lowercase
        | ${host_uc}	Hostname in uppercase
        | ${domain}	Domainname
        | ${domain_lc}	Domainname in lowercase
        | ${domain_uc}	Domainname in uppercase

        **Path**: /settings/NSCA/client

        **Key**: hostname

        **Default value**: auto

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client]
            # HOSTNAME
            hostname=auto




…  / handlers
-------------

.. confpath:: /settings/NSCA/client/handlers
    :synopsis: CLIENT HANDLER SECTION

**CLIENT HANDLER SECTION**






    **Sample**::

        # CLIENT HANDLER SECTION
        # 
        [/settings/NSCA/client/handlers]




…  / targets
------------

.. confpath:: /settings/NSCA/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

**REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/NSCA/client/targets]




…  / targets / default
----------------------

.. confpath:: /settings/NSCA/client/targets/default
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
        :confkey:`encoding` |  | ENCODING
        :confkey:`encryption` | aes | ENCRYPTION
        :confkey:`host` |  | TARGET HOST
        :confkey:`password` |  | PASSWORD
        :confkey:`payload length` | 512 | PAYLOAD LENGTH
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`time offset` | 0 | TIME OFFSET
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 0 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` |  | VERIFY MODE

    **Sample**::

        # TARGET
        # Target definition for: default
        [/settings/NSCA/client/targets/default]
        address=
        allowed ciphers=
        ca=
        certificate=
        certificate format=
        certificate key=
        dh=
        encoding=
        encryption=aes
        host=
        password=
        payload length=512
        port=
        retries=3
        time offset=0
        timeout=30
        use ssl=0
        verify mode=


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/NSCA/client/targets/default

        **Key**: address

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # TARGET ADDRESS
            address=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Path**: /settings/NSCA/client/targets/default

        **Key**: allowed ciphers

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # ALLOWED CIPHERS
            allowed ciphers=


    .. confkey:: ca
        :synopsis: CA

        **CA**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/default

        **Key**: ca

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Path**: /settings/NSCA/client/targets/default

        **Key**: certificate

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/default

        **Key**: certificate format

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # CERTIFICATE FORMAT
            certificate format=


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/default

        **Key**: certificate key

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # SSL CERTIFICATE
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/default

        **Key**: dh

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # DH KEY
            dh=


    .. confkey:: encoding
        :synopsis: ENCODING

        **ENCODING**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/default

        **Key**: encoding

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # ENCODING
            encoding=


    .. confkey:: encryption
        :synopsis: ENCRYPTION

        **ENCRYPTION**

        | Name of encryption algorithm to use.
        | Has to be the same as your server i using or it wont work at all.This is also independent of SSL and generally used instead of SSL.
        | Available encryption algorithms are:
        | none = No Encryption (not safe)
        | xor = XOR
        | des = DES
        | 3des = DES-EDE3
        | cast128 = CAST-128
        | xtea = XTEA
        | blowfish = Blowfish
        | twofish = Twofish
        | rc2 = RC2
        | aes128 = AES
        | aes192 = AES
        | aes = AES
        | serpent = Serpent
        | gost = GOST

        **Path**: /settings/NSCA/client/targets/default

        **Key**: encryption

        **Default value**: aes

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # ENCRYPTION
            encryption=aes


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/default

        **Key**: host

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # TARGET HOST
            host=


    .. confkey:: password
        :synopsis: PASSWORD

        **PASSWORD**

        | The password to use. Again has to be the same as the server or it wont work at all.

        **Path**: /settings/NSCA/client/targets/default

        **Key**: password

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # PASSWORD
            password=


    .. confkey:: payload length
        :synopsis: PAYLOAD LENGTH

        **PAYLOAD LENGTH**

        | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/default

        **Key**: payload length

        **Default value**: 512

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # PAYLOAD LENGTH
            payload length=512


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/default

        **Key**: port

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/NSCA/client/targets/default

        **Key**: retries

        **Default value**: 3

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # RETRIES
            retries=3


    .. confkey:: time offset
        :synopsis: TIME OFFSET

        **TIME OFFSET**

        | Time offset.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/default

        **Key**: time offset

        **Default value**: 0

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # TIME OFFSET
            time offset=0


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/NSCA/client/targets/default

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # TIMEOUT
            timeout=30


    .. confkey:: use ssl
        :synopsis: ENABLE SSL ENCRYPTION

        **ENABLE SSL ENCRYPTION**

        | This option controls if SSL should be enabled.

        **Path**: /settings/NSCA/client/targets/default

        **Key**: use ssl

        **Default value**: 0

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # ENABLE SSL ENCRYPTION
            use ssl=0


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**



        **Path**: /settings/NSCA/client/targets/default

        **Key**: verify mode

        **Default value**: 

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/default]
            # VERIFY MODE
            verify mode=




…  / targets / sample
---------------------

.. confpath:: /settings/NSCA/client/targets/sample
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
        :confkey:`encoding` |  | ENCODING
        :confkey:`encryption` | aes | ENCRYPTION
        :confkey:`host` |  | TARGET HOST
        :confkey:`password` |  | PASSWORD
        :confkey:`payload length` | 512 | PAYLOAD LENGTH
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`time offset` | 0 | TIME OFFSET
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 0 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` |  | VERIFY MODE

    **Sample**::

        # TARGET
        # Target definition for: sample
        [/settings/NSCA/client/targets/sample]
        address=
        allowed ciphers=
        ca=
        certificate=
        certificate format=
        certificate key=
        dh=
        encoding=
        encryption=aes
        host=
        password=
        payload length=512
        port=
        retries=3
        time offset=0
        timeout=30
        use ssl=0
        verify mode=


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**

        | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: allowed ciphers

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # ALLOWED CIPHERS
            allowed ciphers=


    .. confkey:: ca
        :synopsis: CA

        **CA**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: ca

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # CA
            ca=


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Path**: /settings/NSCA/client/targets/sample

        **Key**: certificate

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # SSL CERTIFICATE
            certificate=


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: certificate format

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # CERTIFICATE FORMAT
            certificate format=


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: certificate key

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # SSL CERTIFICATE
            certificate key=


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: dh

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # DH KEY
            dh=


    .. confkey:: encoding
        :synopsis: ENCODING

        **ENCODING**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: encoding

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # ENCODING
            encoding=


    .. confkey:: encryption
        :synopsis: ENCRYPTION

        **ENCRYPTION**

        | Name of encryption algorithm to use.
        | Has to be the same as your server i using or it wont work at all.This is also independent of SSL and generally used instead of SSL.
        | Available encryption algorithms are:
        | none = No Encryption (not safe)
        | xor = XOR
        | des = DES
        | 3des = DES-EDE3
        | cast128 = CAST-128
        | xtea = XTEA
        | blowfish = Blowfish
        | twofish = Twofish
        | rc2 = RC2
        | aes128 = AES
        | aes192 = AES
        | aes = AES
        | serpent = Serpent
        | gost = GOST

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: encryption

        **Default value**: aes

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # ENCRYPTION
            encryption=aes


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: host

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # TARGET HOST
            host=


    .. confkey:: password
        :synopsis: PASSWORD

        **PASSWORD**

        | The password to use. Again has to be the same as the server or it wont work at all.

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: password

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # PASSWORD
            password=


    .. confkey:: payload length
        :synopsis: PAYLOAD LENGTH

        **PAYLOAD LENGTH**

        | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: payload length

        **Default value**: 512

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # PAYLOAD LENGTH
            payload length=512


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: port

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: retries

        **Default value**: 3

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # RETRIES
            retries=3


    .. confkey:: time offset
        :synopsis: TIME OFFSET

        **TIME OFFSET**

        | Time offset.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: time offset

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # TIME OFFSET
            time offset=0


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # TIMEOUT
            timeout=30


    .. confkey:: use ssl
        :synopsis: ENABLE SSL ENCRYPTION

        **ENABLE SSL ENCRYPTION**

        | This option controls if SSL should be enabled.

        **Path**: /settings/NSCA/client/targets/sample

        **Key**: use ssl

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # ENABLE SSL ENCRYPTION
            use ssl=0


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**



        **Path**: /settings/NSCA/client/targets/sample

        **Key**: verify mode

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NSCAClient`

        **Sample**::

            [/settings/NSCA/client/targets/sample]
            # VERIFY MODE
            verify mode=


