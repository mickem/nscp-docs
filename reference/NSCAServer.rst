.. default-domain:: nscp

.. module:: NSCAServer
    :synopsis: A server that listens for incoming NSCA connection and processes incoming requests.

===================================
:module:`NSCAServer` --- NSCAServer
===================================
A server that listens for incoming NSCA connection and processes incoming requests.





**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/default` | :confkey:`~/settings/default.allowed hosts` | ALLOWED HOSTS
    :confpath:`/settings/default` | :confkey:`~/settings/default.bind to` | BIND TO ADDRESS
    :confpath:`/settings/default` | :confkey:`~/settings/default.cache allowed hosts` | CACHE ALLOWED HOSTS
    :confpath:`/settings/default` | :confkey:`~/settings/default.inbox` | INBOX
    :confpath:`/settings/default` | :confkey:`~/settings/default.password` | PASSWORD
    :confpath:`/settings/default` | :confkey:`~/settings/default.timeout` | TIMEOUT
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.encryption` | ENCRYPTION
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.performance data` | PERFORMANCE DATA
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.port` | PORT NUMBER
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.use ssl` | ENABLE SSL ENCRYPTION

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/default` | :confkey:`~/settings/default.encoding` | NRPE PAYLOAD ENCODING
    :confpath:`/settings/default` | :confkey:`~/settings/default.modern commands` | Register modern aliases for built-in commands
    :confpath:`/settings/default` | :confkey:`~/settings/default.socket queue size` | LISTEN QUEUE
    :confpath:`/settings/default` | :confkey:`~/settings/default.thread pool` | THREAD POOL
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.allowed hosts` | ALLOWED HOSTS
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.bind to` | BIND TO ADDRESS
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.ca` | CA
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.cache allowed hosts` | CACHE ALLOWED HOSTS
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.dh` | DH KEY
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.inbox` | INBOX
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.password` | PASSWORD
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.socket queue size` | LISTEN QUEUE
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.thread pool` | THREAD POOL
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.timeout` | TIMEOUT
    :confpath:`/settings/NSCA/server` | :confkey:`~/settings/NSCA/server.verify mode` | VERIFY MODE







… default
---------
.. confpath:: /settings/default
    :synopsis: 

    ****




.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`allowed hosts` | 127.0.0.1 | ALLOWED HOSTS
    :confkey:`bind to` |  | BIND TO ADDRESS
    :confkey:`cache allowed hosts` | 1 | CACHE ALLOWED HOSTS
    :confkey:`encoding` |  | NRPE PAYLOAD ENCODING
    :confkey:`inbox` | inbox | INBOX
    :confkey:`modern commands` | 1 | Register modern aliases for built-in commands
    :confkey:`password` |  | PASSWORD
    :confkey:`socket queue size` | 0 | LISTEN QUEUE
    :confkey:`thread pool` | 10 | THREAD POOL
    :confkey:`timeout` | 30 | TIMEOUT


**Sample**::

    # 
    # 
    [/settings/default]
    allowed hosts=127.0.0.1
    bind to=
    cache allowed hosts=1
    encoding=
    inbox=inbox
    modern commands=1
    password=
    socket queue size=0
    thread pool=10
    timeout=30


.. confkey:: allowed hosts
    :synopsis: ALLOWED HOSTS

    **ALLOWED HOSTS**

    | A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges.

    **Path**: /settings/default

    **Key**: allowed hosts

    **Default value**: 127.0.0.1

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # ALLOWED HOSTS
        # A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges.
        [/settings/default]
        allowed hosts=127.0.0.1


.. confkey:: bind to
    :synopsis: BIND TO ADDRESS

    **BIND TO ADDRESS**

    | Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses.

    **Path**: /settings/default

    **Key**: bind to

    **Default value**: 

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # BIND TO ADDRESS
        # Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses.
        [/settings/default]
        bind to=


.. confkey:: cache allowed hosts
    :synopsis: CACHE ALLOWED HOSTS

    **CACHE ALLOWED HOSTS**

    | If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server.

    **Path**: /settings/default

    **Key**: cache allowed hosts

    **Default value**: 1

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # CACHE ALLOWED HOSTS
        # If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server.
        [/settings/default]
        cache allowed hosts=1


.. confkey:: encoding
    :synopsis: NRPE PAYLOAD ENCODING

    **NRPE PAYLOAD ENCODING**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: encoding

    **Default value**: 

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # NRPE PAYLOAD ENCODING
        # 
        [/settings/default]
        encoding=


.. confkey:: inbox
    :synopsis: INBOX

    **INBOX**

    | The default channel to post incoming messages on

    **Path**: /settings/default

    **Key**: inbox

    **Default value**: inbox

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # INBOX
        # The default channel to post incoming messages on
        [/settings/default]
        inbox=inbox


.. confkey:: modern commands
    :synopsis: Register modern aliases for built-in commands

    **Register modern aliases for built-in commands**

    | Register modern alias for commands (ccheck_xxx as opposed of CheckXXX) these are the names which will be used in future version of NSClient++

    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: modern commands

    **Default value**: 1

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # Register modern aliases for built-in commands
        # Register modern alias for commands (ccheck_xxx as opposed of CheckXXX) these are the names which will be used in future version of NSClient++
        [/settings/default]
        modern commands=1


.. confkey:: password
    :synopsis: PASSWORD

    **PASSWORD**

    | Password to use

    **Path**: /settings/default

    **Key**: password

    **Default value**: 

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # PASSWORD
        # Password to use
        [/settings/default]
        password=


.. confkey:: socket queue size
    :synopsis: LISTEN QUEUE

    **LISTEN QUEUE**

    | Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: socket queue size

    **Default value**: 0

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # LISTEN QUEUE
        # Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts.
        [/settings/default]
        socket queue size=0


.. confkey:: thread pool
    :synopsis: THREAD POOL

    **THREAD POOL**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: thread pool

    **Default value**: 10

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # THREAD POOL
        # 
        [/settings/default]
        thread pool=10


.. confkey:: timeout
    :synopsis: TIMEOUT

    **TIMEOUT**

    | Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out.

    **Path**: /settings/default

    **Key**: timeout

    **Default value**: 30

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # TIMEOUT
        # Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out.
        [/settings/default]
        timeout=30




… NSCA / server
---------------
.. confpath:: /settings/NSCA/server
    :synopsis: NSCA SERVER SECTION

    **NSCA SERVER SECTION**

    | Section for NSCA (NSCAServer) (check_nsca) protocol options.


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`allowed ciphers` | ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH | ALLOWED CIPHERS
    :confkey:`allowed hosts` | 127.0.0.1 | ALLOWED HOSTS
    :confkey:`bind to` |  | BIND TO ADDRESS
    :confkey:`ca` | ${certificate-path}/ca.pem | CA
    :confkey:`cache allowed hosts` | 1 | CACHE ALLOWED HOSTS
    :confkey:`certificate` | ${certificate-path}/certificate.pem | SSL CERTIFICATE
    :confkey:`certificate format` | PEM | CERTIFICATE FORMAT
    :confkey:`certificate key` | ${certificate-path}/certificate_key.pem | SSL CERTIFICATE
    :confkey:`dh` | ${certificate-path}/nrpe_dh_512.pem | DH KEY
    :confkey:`encryption` | aes | ENCRYPTION
    :confkey:`inbox` | inbox | INBOX
    :confkey:`password` |  | PASSWORD
    :confkey:`payload length` | 512 | PAYLOAD LENGTH
    :confkey:`performance data` | 1 | PERFORMANCE DATA
    :confkey:`port` | 5667 | PORT NUMBER
    :confkey:`socket queue size` | 0 | LISTEN QUEUE
    :confkey:`thread pool` | 10 | THREAD POOL
    :confkey:`timeout` | 30 | TIMEOUT
    :confkey:`use ssl` | 0 | ENABLE SSL ENCRYPTION
    :confkey:`verify mode` | none | VERIFY MODE


**Sample**::

    # NSCA SERVER SECTION
    # Section for NSCA (NSCAServer) (check_nsca) protocol options.
    [/settings/NSCA/server]
    allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
    allowed hosts=127.0.0.1
    bind to=
    ca=${certificate-path}/ca.pem
    cache allowed hosts=1
    certificate=${certificate-path}/certificate.pem
    certificate format=PEM
    certificate key=${certificate-path}/certificate_key.pem
    dh=${certificate-path}/nrpe_dh_512.pem
    encryption=aes
    inbox=inbox
    password=
    payload length=512
    performance data=1
    port=5667
    socket queue size=0
    thread pool=10
    timeout=30
    use ssl=0
    verify mode=none


.. confkey:: allowed ciphers
    :synopsis: ALLOWED CIPHERS

    **ALLOWED CIPHERS**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: allowed ciphers

    **Default value**: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # ALLOWED CIPHERS
        # 
        [/settings/NSCA/server]
        allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH


.. confkey:: allowed hosts
    :synopsis: ALLOWED HOSTS

    **ALLOWED HOSTS**

    | A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: allowed hosts

    **Default value**: 127.0.0.1

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # ALLOWED HOSTS
        # A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NSCA/server]
        allowed hosts=127.0.0.1


.. confkey:: bind to
    :synopsis: BIND TO ADDRESS

    **BIND TO ADDRESS**

    | Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: bind to

    **Default value**: 

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # BIND TO ADDRESS
        # Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NSCA/server]
        bind to=


.. confkey:: ca
    :synopsis: CA

    **CA**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: ca

    **Default value**: ${certificate-path}/ca.pem

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # CA
        # 
        [/settings/NSCA/server]
        ca=${certificate-path}/ca.pem


.. confkey:: cache allowed hosts
    :synopsis: CACHE ALLOWED HOSTS

    **CACHE ALLOWED HOSTS**

    | If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: cache allowed hosts

    **Default value**: 1

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # CACHE ALLOWED HOSTS
        # If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NSCA/server]
        cache allowed hosts=1


.. confkey:: certificate
    :synopsis: SSL CERTIFICATE

    **SSL CERTIFICATE**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: certificate

    **Default value**: ${certificate-path}/certificate.pem

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # SSL CERTIFICATE
        # 
        [/settings/NSCA/server]
        certificate=${certificate-path}/certificate.pem


.. confkey:: certificate format
    :synopsis: CERTIFICATE FORMAT

    **CERTIFICATE FORMAT**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: certificate format

    **Default value**: PEM

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # CERTIFICATE FORMAT
        # 
        [/settings/NSCA/server]
        certificate format=PEM


.. confkey:: certificate key
    :synopsis: SSL CERTIFICATE

    **SSL CERTIFICATE**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: certificate key

    **Default value**: ${certificate-path}/certificate_key.pem

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # SSL CERTIFICATE
        # 
        [/settings/NSCA/server]
        certificate key=${certificate-path}/certificate_key.pem


.. confkey:: dh
    :synopsis: DH KEY

    **DH KEY**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: dh

    **Default value**: ${certificate-path}/nrpe_dh_512.pem

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # DH KEY
        # 
        [/settings/NSCA/server]
        dh=${certificate-path}/nrpe_dh_512.pem


.. confkey:: encryption
    :synopsis: ENCRYPTION

    **ENCRYPTION**

    | Name of encryption algorithm to use.
    | Has to be the same as your agent i using or it wont work at all.This is also independent of SSL and generally used instead of SSL.
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

    **Path**: /settings/NSCA/server

    **Key**: encryption

    **Default value**: aes

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # ENCRYPTION
        # Name of encryption algorithm to use.
        [/settings/NSCA/server]
        encryption=aes


.. confkey:: inbox
    :synopsis: INBOX

    **INBOX**

    | The default channel to post incoming messages on parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: inbox

    **Default value**: inbox

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # INBOX
        # The default channel to post incoming messages on parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NSCA/server]
        inbox=inbox


.. confkey:: password
    :synopsis: PASSWORD

    **PASSWORD**

    | Password to use parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: password

    **Default value**: 

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # PASSWORD
        # Password to use parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NSCA/server]
        password=


.. confkey:: payload length
    :synopsis: PAYLOAD LENGTH

    **PAYLOAD LENGTH**

    | Length of payload to/from the NSCA agent. This is a hard specific value so you have to "configure" (read recompile) your NSCA agent to use the same value for it to work.

    **Path**: /settings/NSCA/server

    **Key**: payload length

    **Default value**: 512

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # PAYLOAD LENGTH
        # Length of payload to/from the NSCA agent. This is a hard specific value so you have to "configure" (read recompile) your NSCA agent to use the same value for it to work.
        [/settings/NSCA/server]
        payload length=512


.. confkey:: performance data
    :synopsis: PERFORMANCE DATA

    **PERFORMANCE DATA**

    | Send performance data back to nagios (set this to false to remove all performance data).

    **Path**: /settings/NSCA/server

    **Key**: performance data

    **Default value**: 1

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # PERFORMANCE DATA
        # Send performance data back to nagios (set this to false to remove all performance data).
        [/settings/NSCA/server]
        performance data=1


.. confkey:: port
    :synopsis: PORT NUMBER

    **PORT NUMBER**

    | Port to use for NSCA.

    **Path**: /settings/NSCA/server

    **Key**: port

    **Default value**: 5667

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # PORT NUMBER
        # Port to use for NSCA.
        [/settings/NSCA/server]
        port=5667


.. confkey:: socket queue size
    :synopsis: LISTEN QUEUE

    **LISTEN QUEUE**

    | Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: socket queue size

    **Default value**: 0

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # LISTEN QUEUE
        # Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NSCA/server]
        socket queue size=0


.. confkey:: thread pool
    :synopsis: THREAD POOL

    **THREAD POOL**

    | parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: thread pool

    **Default value**: 10

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # THREAD POOL
        # parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NSCA/server]
        thread pool=10


.. confkey:: timeout
    :synopsis: TIMEOUT

    **TIMEOUT**

    | Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: timeout

    **Default value**: 30

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # TIMEOUT
        # Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NSCA/server]
        timeout=30


.. confkey:: use ssl
    :synopsis: ENABLE SSL ENCRYPTION

    **ENABLE SSL ENCRYPTION**

    | This option controls if SSL should be enabled.

    **Path**: /settings/NSCA/server

    **Key**: use ssl

    **Default value**: 0

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # ENABLE SSL ENCRYPTION
        # This option controls if SSL should be enabled.
        [/settings/NSCA/server]
        use ssl=0


.. confkey:: verify mode
    :synopsis: VERIFY MODE

    **VERIFY MODE**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NSCA/server

    **Key**: verify mode

    **Default value**: none

    **Used by**: :module:`NSCAServer`

    **Sample**::

        # VERIFY MODE
        # 
        [/settings/NSCA/server]
        verify mode=none


