.. default-domain:: nscp

.. module:: SimpleCache
    :synopsis: Stores status updates and allows for active checks to retrieve them

=====================================
:module:`SimpleCache` --- SimpleCache
=====================================
Stores status updates and allows for active checks to retrieve them

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_cache` | Fetch results from the cache.


**Aliases (Overview)**:

A list of all short hand aliases for queries (check commands)



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    checkcache | Alias for: :query:`check_cache`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/cache` | :confkey:`~/settings/cache.channel` | CHANNEL
    :confpath:`/settings/cache` | :confkey:`~/settings/cache.primary index` | PRIMARY CACHE INDEX





Queries
=======
A quick reference for all available queries (check commands) in the SimpleCache module.

:query:`check_cache`
--------------------
.. query:: check_cache
    :synopsis: Fetch results from the cache.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`key` |  | The key (will not be parsed)
    :option:`host` |  | The host to look for (translates into the key)
    :option:`command` |  | The command to look for (translates into the key)
    :option:`channel` |  | The channel to look for (translates into the key)
    :option:`alias` |  | The alias to look for (translates into the key)
    :option:`not-found-msg` | Entry not found | The message to display when a message is not found
    :option:`not-found-code` | unknown | The return status to return when a message is not found




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

.. option:: key
    :synopsis: The key (will not be parsed)

    | The key (will not be parsed)

.. option:: host
    :synopsis: The host to look for (translates into the key)

    | The host to look for (translates into the key)

.. option:: command
    :synopsis: The command to look for (translates into the key)

    | The command to look for (translates into the key)

.. option:: channel
    :synopsis: The channel to look for (translates into the key)

    | The channel to look for (translates into the key)

.. option:: alias
    :synopsis: The alias to look for (translates into the key)

    | The alias to look for (translates into the key)

.. option:: not-found-msg
    :synopsis: The message to display when a message is not found

    | The message to display when a message is not found

.. option:: not-found-code
    :synopsis: The return status to return when a message is not found

    | The return status to return when a message is not found





/ settings/ cache
-----------------

.. confpath:: /settings/cache
    :synopsis: CACHE

**CACHE**

    | Section for simple cache module (SimpleCache.dll).


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`channel` | CACHE | CHANNEL
        :confkey:`primary index` | ${alias-or-command} | PRIMARY CACHE INDEX

    **Sample**::

        # CACHE
        # Section for simple cache module (SimpleCache.dll).
        [/settings/cache]
        channel=CACHE
        primary index=${alias-or-command}


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/cache

        **Key**: channel

        **Default value**: CACHE

        **Used by**: :module:`SimpleCache`

        **Sample**::

            [/settings/cache]
            # CHANNEL
            channel=CACHE


    .. confkey:: primary index
        :synopsis: PRIMARY CACHE INDEX

        **PRIMARY CACHE INDEX**

        | Set this to the value you want to use as unique key for the cache.
        | Can be any arbitrary string as well as include any of the following special keywords:${command} = The command name, ${host} the host, ${channel} the recieving channel, ${alias} the alias for the command, ${alias-or-command} = alias if set otherweise command, ${message} = the message data (no escape), ${result} = The result status (number).

        **Path**: /settings/cache

        **Key**: primary index

        **Default value**: ${alias-or-command}

        **Used by**: :module:`SimpleCache`

        **Sample**::

            [/settings/cache]
            # PRIMARY CACHE INDEX
            primary index=${alias-or-command}


