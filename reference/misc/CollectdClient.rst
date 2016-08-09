.. default-domain:: nscp

.. module:: CollectdClient
    :synopsis: CollectD client can be used to submit metrics to a collectd server

===========================================
:module:`CollectdClient` --- CollectdClient
===========================================
CollectD client can be used to submit metrics to a collectd server





**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/collectd/client` | :confkey:`~/settings/collectd/client.hostname` | HOSTNAME
    :confpath:`/settings/collectd/client/targets/default` | :confkey:`~/settings/collectd/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/collectd/client/targets/default` | :confkey:`~/settings/collectd/client/targets/default.retries` | RETRIES
    :confpath:`/settings/collectd/client/targets/default` | :confkey:`~/settings/collectd/client/targets/default.timeout` | TIMEOUT

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/collectd/client/targets/default` | :confkey:`~/settings/collectd/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/collectd/client/targets/default` | :confkey:`~/settings/collectd/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/collectd/client/targets/sample` | :confkey:`~/settings/collectd/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/collectd/client/targets/sample` | :confkey:`~/settings/collectd/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/collectd/client/targets/sample` | :confkey:`~/settings/collectd/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/collectd/client/targets/sample` | :confkey:`~/settings/collectd/client/targets/sample.retries` | RETRIES
    :confpath:`/settings/collectd/client/targets/sample` | :confkey:`~/settings/collectd/client/targets/sample.timeout` | TIMEOUT







/ settings/ collectd/ client
----------------------------

.. confpath:: /settings/collectd/client
    :synopsis: COLLECTD CLIENT SECTION

**COLLECTD CLIENT SECTION**

    | Section for NSCA passive check module.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`hostname` | auto | HOSTNAME

    **Sample**::

        # COLLECTD CLIENT SECTION
        # Section for NSCA passive check module.
        [/settings/collectd/client]
        hostname=auto


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

        **Path**: /settings/collectd/client

        **Key**: hostname

        **Default value**: auto

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client]
            # HOSTNAME
            hostname=auto




…  / targets
------------

.. confpath:: /settings/collectd/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

**REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/collectd/client/targets]




…  / targets / default
----------------------

.. confpath:: /settings/collectd/client/targets/default
    :synopsis: TARGET

**TARGET**

    | Target definition for: default


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`host` |  | TARGET HOST
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`timeout` | 30 | TIMEOUT

    **Sample**::

        # TARGET
        # Target definition for: default
        [/settings/collectd/client/targets/default]
        address=
        host=
        port=
        retries=3
        timeout=30


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/collectd/client/targets/default

        **Key**: address

        **Default value**: 

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/default]
            # TARGET ADDRESS
            address=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/collectd/client/targets/default

        **Key**: host

        **Default value**: 

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/default]
            # TARGET HOST
            host=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/collectd/client/targets/default

        **Key**: port

        **Default value**: 

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/default]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/collectd/client/targets/default

        **Key**: retries

        **Default value**: 3

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/default]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/collectd/client/targets/default

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/default]
            # TIMEOUT
            timeout=30




…  / targets / sample
---------------------

.. confpath:: /settings/collectd/client/targets/sample
    :synopsis: TARGET

**TARGET**

    | Target definition for: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`host` |  | TARGET HOST
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`timeout` | 30 | TIMEOUT

    **Sample**::

        # TARGET
        # Target definition for: sample
        [/settings/collectd/client/targets/sample]
        address=
        host=
        port=
        retries=3
        timeout=30


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/collectd/client/targets/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/collectd/client/targets/sample

        **Key**: host

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/sample]
            # TARGET HOST
            host=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/collectd/client/targets/sample

        **Key**: port

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/sample]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/collectd/client/targets/sample

        **Key**: retries

        **Default value**: 3

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/sample]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/collectd/client/targets/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CollectdClient`

        **Sample**::

            [/settings/collectd/client/targets/sample]
            # TIMEOUT
            timeout=30


