.. _manual_settings-index:

########
Settings
########

The NSClient++ settings store is a hierarchical tree structure with key value pairs.
Traditionally this is stored in a flat ini-style file where the "paths" are defined as sections.
But there are other options as well and for instance the registry is another common place to store settings.
With the new configuration UI in 0.4.3 it is simpler to manipulate the settings if they are store in the registry and thus probably a better place to keep them.

Which keys are available and what they mean are describe by the modules which use the various keys. 
Thus it the place to find the documentation for the various configuration options are in the reference section of the documentation.
Where it is split by module.

Include
-------

Another really useful feature of the settings in NSClient++ is the ability to include various other settings.
This is very flexible and you can include ini file from the registry and vice versa.

The way to include a file (if you are using in ifles) is to add a key under the /include section.

including file::

    [/include]
    foo=foo.ini

You can include any number of files registry or other stores. and they will be instansiated in a tree strcutre with a parent child relationship.
Important to note here is that the first found key will be used. So parents will override children.

And example of this:

nsclient.ini::

    [/include]
    client=client.ini
    
    [/test]
    key1=This values comes from nsclient.ini

client.ini::

    [/include]
    baseline=baseline.ini
    
    [/test]
    key1=This values comes from client.ini
    key2=This values comes from client.ini

baseline.ini::

    [/test]
    key1=This values comes from baseline.ini
    key2=This values comes from baseline.ini
    key3=This values comes from baseline.ini

in the above example the values of /test keyx will be:

 * key1=This values comes from nsclient.ini
 * key2=This values comes from client.ini
 * key3=This values comes from baseline.ini

 This can be very usefull to distribute a baseline configurtion for a caompny or monitoring product.
 Then all "machine specific customization" would go into the nsclient.ini config where as client.ini would be reserved for the clients global config. ANd finally baseline.ini wiould be monitoring tool specific configuration.
