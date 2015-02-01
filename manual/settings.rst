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

The way this is handled is by adding keys under the /include paths.

including file::

    [/include]
    foo=foo.ini
