.. default-domain:: nscp

.. module:: NSCAClient
    :synopsis: NSCA client can be used both from command line and from queries to submit passive checks via NSCA

===================================
:module:`NSCAClient` --- NSCAClient
===================================
NSCA client can be used both from command line and from queries to submit passive checks via NSCA

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`nsca_submit` | Submit information to remote host via NSCA.




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
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.timeout` | TIMEOUT
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.verify mode` | VERIFY MODE

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NSCA/client` | :confkey:`~/settings/NSCA/client.delay` | DELAY
    :confpath:`/settings/NSCA/client` | :confkey:`~/settings/NSCA/client.encoding` | NSCA DATA ENCODING
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.alias` | ALIAS
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.ca` | CA
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.dh` | DH KEY
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.encoding` | ENCODING
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.is template` | IS TEMPLATE
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.parent` | PARENT
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.port` | TARGET PORT
    :confpath:`/settings/NSCA/client/targets/default` | :confkey:`~/settings/NSCA/client/targets/default.time offset` | TIME OFFSET

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.alias` | ALIAS
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.ca` | CA
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.dh` | DH KEY
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.encoding` | ENCODING
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.encryption` | ENCRYPTION
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.is template` | IS TEMPLATE
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.parent` | PARENT
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.password` | PASSWORD
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.time offset` | TIME OFFSET
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.timeout` | TIMEOUT
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.use ssl` | ENABLE SSL ENCRYPTION
    :confpath:`/settings/NSCA/client/targets/sample` | :confkey:`~/settings/NSCA/client/targets/sample.verify mode` | VERIFY MODE


Queries
=======
A quick reference for all avalible queries (check commands) in the NSCAClient module.

:query:`nsca_submit`
--------------------
.. query:: nsca_submit
    :synopsis: Submit information to remote host via NSCA.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`host` | N/A | The host of the host running the server
    :option:`port` | N/A | The port of the host running the server
    :option:`address` | N/A | The address (host:port) of the host running the server
    :option:`timeout` | N/A | Number of seconds before connection times out (default=10)
    :option:`target` | N/A | Target to use (lookup connection info from config)
    :option:`retry` | N/A | Number of times ti retry a failed connection attempt (default=2)
    :option:`command` | N/A | The name of the command that the remote daemon should run
    :option:`alias` | N/A | Same as command
    :option:`message` | N/A | Message
    :option:`result` | N/A | Result code either a number or OK, WARN, CRIT, UNKNOWN
    :option:`encryption` | N/A | Name of encryption algorithm to use.
    :option:`certificate` | N/A | Length of payload (has to be same as on the server)
    :option:`dh` | N/A | Length of payload (has to be same as on the server)
    :option:`certificate-key` | N/A | Client certificate to use
    :option:`certificate-format` | N/A | Client certificate format
    :option:`ca` | N/A | Certificate authority
    :option:`verify` | N/A | Client certificate format
    :option:`allowed-ciphers` | N/A | Client certificate format
    :option:`payload-length` | N/A | Length of payload (has to be same as on the server)
    :option:`buffer-length` | N/A | Length of payload to/from the NRPE agent. This is a hard specific value so you have to \configure\" (read recompile) your NRPE agent to use the same value for it to work."
    :option:`ssl` | N/A | Initial an ssl handshake with the server.
    :option:`timeout` | N/A | 
    :option:`password` | N/A | Password
    :option:`source-host` | N/A | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`sender-host` | N/A | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`time-offset` | N/A | 


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

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

.. option:: payload-length
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: buffer-length
    :synopsis: Length of payload to/from the NRPE agent. This is a hard specific value so you have to \configure\" (read recompile) your NRPE agent to use the same value for it to work."

    | Length of payload to/from the NRPE agent. This is a hard specific value so you have to \configure\" (read recompile) your NRPE agent to use the same value for it to work."

.. option:: ssl
    :synopsis: Initial an ssl handshake with the server.

    | Initial an ssl handshake with the server.

.. option:: timeout
    :synopsis: 



.. option:: password
    :synopsis: Password

    | Password

.. option:: source-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: sender-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: time-offset
    :synopsis: 








… 
--
.. confpath:: /settings/NSCA/client
    :synopsis: NSCA CLIENT SECTION

    **NSCA CLIENT SECTION**

    | Section for NSCA passive check module.


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`channel` | NSCA | CHANNEL
    :confkey:`delay` | 0 | DELAY
    :confkey:`encoding` |  | NSCA DATA ENCODING
    :confkey:`hostname` | auto | HOSTNAME


**Sample**::

    # NSCA CLIENT SECTION
    # Section for NSCA passive check module.
    [/settings/NSCA/client]
    channel=NSCA
    delay=0
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

        # CHANNEL
        # The channel to listen to.
        [/settings/NSCA/client]
        channel=NSCA


.. confkey:: delay
    :synopsis: DELAY

    **DELAY**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client

    **Key**: delay

    **Default value**: 0

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # DELAY
        # 
        [/settings/NSCA/client]
        delay=0


.. confkey:: encoding
    :synopsis: NSCA DATA ENCODING

    **NSCA DATA ENCODING**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client

    **Key**: encoding

    **Default value**: 

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # NSCA DATA ENCODING
        # 
        [/settings/NSCA/client]
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

        # HOSTNAME
        # The host name of the monitored computer.
        [/settings/NSCA/client]
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
    :confkey:`encoding` |  | ENCODING
    :confkey:`encryption` | aes | ENCRYPTION
    :confkey:`host` |  | TARGET HOST
    :confkey:`is template` | 0 | IS TEMPLATE
    :confkey:`parent` | default | PARENT
    :confkey:`password` |  | PASSWORD
    :confkey:`payload length` | 512 | PAYLOAD LENGTH
    :confkey:`port` | 0 | TARGET PORT
    :confkey:`time offset` | 0 | TIME OFFSET
    :confkey:`timeout` | 30 | TIMEOUT
    :confkey:`use ssl` | 0 | ENABLE SSL ENCRYPTION
    :confkey:`verify mode` | none | VERIFY MODE


**Sample**::

    # TARGET DEFENITION
    # Target definition for: default
    [/settings/NSCA/client/targets/default]
    address=
    alias=
    allowed ciphers=ADH
    ca=
    certificate=
    certificate format=PEM
    certificate key=
    dh=${certificate-path}/nrpe_dh_512.pem
    encoding=
    encryption=aes
    host=
    is template=0
    parent=default
    password=
    payload length=512
    port=0
    time offset=0
    timeout=30
    use ssl=0
    verify mode=none


.. confkey:: address
    :synopsis: TARGET ADDRESS

    **TARGET ADDRESS**

    | Target host address

    **Path**: /settings/NSCA/client/targets/default

    **Key**: address

    **Default value**: 

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # TARGET ADDRESS
        # Target host address
        [/settings/NSCA/client/targets/default]
        address=


.. confkey:: alias
    :synopsis: ALIAS

    **ALIAS**

    | The alias (service name) to report to server

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/default

    **Key**: alias

    **Default value**: 

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # ALIAS
        # The alias (service name) to report to server
        [/settings/NSCA/client/targets/default]
        alias=


.. confkey:: allowed ciphers
    :synopsis: ALLOWED CIPHERS

    **ALLOWED CIPHERS**

    | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

    **Path**: /settings/NSCA/client/targets/default

    **Key**: allowed ciphers

    **Default value**: ADH

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # ALLOWED CIPHERS
        # A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
        [/settings/NSCA/client/targets/default]
        allowed ciphers=ADH


.. confkey:: ca
    :synopsis: CA

    **CA**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/default

    **Key**: ca

    **Default value**: 

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # CA
        # 
        [/settings/NSCA/client/targets/default]
        ca=


.. confkey:: certificate
    :synopsis: SSL CERTIFICATE

    **SSL CERTIFICATE**



    **Path**: /settings/NSCA/client/targets/default

    **Key**: certificate

    **Default value**: 

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # SSL CERTIFICATE
        # 
        [/settings/NSCA/client/targets/default]
        certificate=


.. confkey:: certificate format
    :synopsis: CERTIFICATE FORMAT

    **CERTIFICATE FORMAT**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/default

    **Key**: certificate format

    **Default value**: PEM

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # CERTIFICATE FORMAT
        # 
        [/settings/NSCA/client/targets/default]
        certificate format=PEM


.. confkey:: certificate key
    :synopsis: SSL CERTIFICATE

    **SSL CERTIFICATE**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/default

    **Key**: certificate key

    **Default value**: 

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # SSL CERTIFICATE
        # 
        [/settings/NSCA/client/targets/default]
        certificate key=


.. confkey:: dh
    :synopsis: DH KEY

    **DH KEY**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/default

    **Key**: dh

    **Default value**: ${certificate-path}/nrpe_dh_512.pem

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # DH KEY
        # 
        [/settings/NSCA/client/targets/default]
        dh=${certificate-path}/nrpe_dh_512.pem


.. confkey:: encoding
    :synopsis: ENCODING

    **ENCODING**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/default

    **Key**: encoding

    **Default value**: 

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # ENCODING
        # 
        [/settings/NSCA/client/targets/default]
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

        # ENCRYPTION
        # Name of encryption algorithm to use.
        [/settings/NSCA/client/targets/default]
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

        # TARGET HOST
        # The target server to report results to.
        [/settings/NSCA/client/targets/default]
        host=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/default

    **Key**: is template

    **Default value**: 0

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # IS TEMPLATE
        # Declare this object as a template (this means it will not be available as a separate object)
        [/settings/NSCA/client/targets/default]
        is template=0


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/default

    **Key**: parent

    **Default value**: default

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # PARENT
        # The parent the target inherits from
        [/settings/NSCA/client/targets/default]
        parent=default


.. confkey:: password
    :synopsis: PASSWORD

    **PASSWORD**

    | The password to use. Again has to be the same as the server or it wont work at all.

    **Path**: /settings/NSCA/client/targets/default

    **Key**: password

    **Default value**: 

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # PASSWORD
        # The password to use. Again has to be the same as the server or it wont work at all.
        [/settings/NSCA/client/targets/default]
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

        # PAYLOAD LENGTH
        # Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.
        [/settings/NSCA/client/targets/default]
        payload length=512


.. confkey:: port
    :synopsis: TARGET PORT

    **TARGET PORT**

    | The target server port

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/default

    **Key**: port

    **Default value**: 0

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # TARGET PORT
        # The target server port
        [/settings/NSCA/client/targets/default]
        port=0


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

        # TIME OFFSET
        # Time offset.
        [/settings/NSCA/client/targets/default]
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

        # TIMEOUT
        # Timeout when reading/writing packets to/from sockets.
        [/settings/NSCA/client/targets/default]
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

        # ENABLE SSL ENCRYPTION
        # This option controls if SSL should be enabled.
        [/settings/NSCA/client/targets/default]
        use ssl=0


.. confkey:: verify mode
    :synopsis: VERIFY MODE

    **VERIFY MODE**



    **Path**: /settings/NSCA/client/targets/default

    **Key**: verify mode

    **Default value**: none

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # VERIFY MODE
        # 
        [/settings/NSCA/client/targets/default]
        verify mode=none




…  / targets / sample
---------------------
.. confpath:: /settings/NSCA/client/targets/sample
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
    :confkey:`encoding` |  | ENCODING
    :confkey:`encryption` | aes | ENCRYPTION
    :confkey:`host` |  | TARGET HOST
    :confkey:`is template` | 0 | IS TEMPLATE
    :confkey:`parent` | default | PARENT
    :confkey:`password` |  | PASSWORD
    :confkey:`payload length` | 512 | PAYLOAD LENGTH
    :confkey:`port` | 0 | TARGET PORT
    :confkey:`time offset` | 0 | TIME OFFSET
    :confkey:`timeout` | 30 | TIMEOUT
    :confkey:`use ssl` | 0 | ENABLE SSL ENCRYPTION
    :confkey:`verify mode` | none | VERIFY MODE


**Sample**::

    # TARGET DEFENITION
    # Target definition for: sample
    [/settings/NSCA/client/targets/sample]
    address=
    alias=
    allowed ciphers=ADH
    ca=
    certificate=
    certificate format=PEM
    certificate key=
    dh=${certificate-path}/nrpe_dh_512.pem
    encoding=
    encryption=aes
    host=
    is template=0
    parent=default
    password=
    payload length=512
    port=0
    time offset=0
    timeout=30
    use ssl=0
    verify mode=none


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

        # TARGET ADDRESS
        # Target host address
        [/settings/NSCA/client/targets/sample]
        address=


.. confkey:: alias
    :synopsis: ALIAS

    **ALIAS**

    | The alias (service name) to report to server

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/sample

    **Key**: alias

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # ALIAS
        # The alias (service name) to report to server
        [/settings/NSCA/client/targets/sample]
        alias=


.. confkey:: allowed ciphers
    :synopsis: ALLOWED CIPHERS

    **ALLOWED CIPHERS**

    | A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

    **Path**: /settings/NSCA/client/targets/sample

    **Key**: allowed ciphers

    **Default value**: ADH

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # ALLOWED CIPHERS
        # A better value is: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
        [/settings/NSCA/client/targets/sample]
        allowed ciphers=ADH


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

        # CA
        # 
        [/settings/NSCA/client/targets/sample]
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

        # SSL CERTIFICATE
        # 
        [/settings/NSCA/client/targets/sample]
        certificate=


.. confkey:: certificate format
    :synopsis: CERTIFICATE FORMAT

    **CERTIFICATE FORMAT**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/sample

    **Key**: certificate format

    **Default value**: PEM

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # CERTIFICATE FORMAT
        # 
        [/settings/NSCA/client/targets/sample]
        certificate format=PEM


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

        # SSL CERTIFICATE
        # 
        [/settings/NSCA/client/targets/sample]
        certificate key=


.. confkey:: dh
    :synopsis: DH KEY

    **DH KEY**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/sample

    **Key**: dh

    **Default value**: ${certificate-path}/nrpe_dh_512.pem

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # DH KEY
        # 
        [/settings/NSCA/client/targets/sample]
        dh=${certificate-path}/nrpe_dh_512.pem


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

        # ENCODING
        # 
        [/settings/NSCA/client/targets/sample]
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

        # ENCRYPTION
        # Name of encryption algorithm to use.
        [/settings/NSCA/client/targets/sample]
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

        # TARGET HOST
        # The target server to report results to.
        [/settings/NSCA/client/targets/sample]
        host=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/sample

    **Key**: is template

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # IS TEMPLATE
        # Declare this object as a template (this means it will not be available as a separate object)
        [/settings/NSCA/client/targets/sample]
        is template=0


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/sample

    **Key**: parent

    **Default value**: default

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # PARENT
        # The parent the target inherits from
        [/settings/NSCA/client/targets/sample]
        parent=default


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

        # PASSWORD
        # The password to use. Again has to be the same as the server or it wont work at all.
        [/settings/NSCA/client/targets/sample]
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

        # PAYLOAD LENGTH
        # Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.
        [/settings/NSCA/client/targets/sample]
        payload length=512


.. confkey:: port
    :synopsis: TARGET PORT

    **TARGET PORT**

    | The target server port

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/client/targets/sample

    **Key**: port

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # TARGET PORT
        # The target server port
        [/settings/NSCA/client/targets/sample]
        port=0


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

        # TIME OFFSET
        # Time offset.
        [/settings/NSCA/client/targets/sample]
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

        # TIMEOUT
        # Timeout when reading/writing packets to/from sockets.
        [/settings/NSCA/client/targets/sample]
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

        # ENABLE SSL ENCRYPTION
        # This option controls if SSL should be enabled.
        [/settings/NSCA/client/targets/sample]
        use ssl=0


.. confkey:: verify mode
    :synopsis: VERIFY MODE

    **VERIFY MODE**



    **Path**: /settings/NSCA/client/targets/sample

    **Key**: verify mode

    **Default value**: none

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NSCAClient`

    **Sample**::

        # VERIFY MODE
        # 
        [/settings/NSCA/client/targets/sample]
        verify mode=none


