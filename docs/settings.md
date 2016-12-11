.. _manual_settings-index:

# Settings #

The NSClient++ settings store is a hierarchical tree structure with key value pairs.
Traditionally this is stored in a flat ini-style file where the "paths" are defined as sections.
But there are other options as well and for instance the registry is another common place to store settings.
With the new configuration UI in 0.4.3 it is simpler to manipulate the settings if they are store in the registry and thus probably a better place to keep them.

Which keys are available and what they mean are describe by the modules which use the various keys.
Thus it the place to find the documentation for the various configuration options are in the reference section of the documentation.
Where it is split by module.

## Include ##

Another really useful feature of the settings in NSClient++ is the ability to include various other settings.
This is very flexible and you can include ini file from the registry and vice versa.

The way to include a file (if you are using in ifles) is to add a key under the /include section.

<dl>
  <dt>including file :  : </dt>
  <dd>
    <p>[/include]</p>
    <p>foo=foo.ini</p>
  </dd>
</dl>
You can include any number of files registry or other stores. and they will be instantiated in a tree structure with a parent child relationship.
Important to note here is that the first found key will be used. So parents will override children.

And example of this:

<dl>
  <dt>nsclient.ini :  : </dt>
  <dd>
    <p>[/include]</p>
    <p>client=client.ini</p>
    <p>[/test]</p>
    <p>key1=This values comes from nsclient.ini</p>
  </dd>
</dl>
<dl>
  <dt>client.ini :  : </dt>
  <dd>
    <p>[/include]</p>
    <p>baseline=baseline.ini</p>
    <p>[/test]</p>
    <p>key1=This values comes from client.ini</p>
    <p>key2=This values comes from client.ini</p>
  </dd>
</dl>
<dl>
  <dt>baseline.ini :  : </dt>
  <dd>
    <p>[/test]</p>
    <p>key1=This values comes from baseline.ini</p>
    <p>key2=This values comes from baseline.ini</p>
    <p>key3=This values comes from baseline.ini</p>
  </dd>
</dl>
in the above example the values of /test keyx will be:

- key1=This values comes from nsclient.ini
- key2=This values comes from client.ini
- key3=This values comes from baseline.ini
  
  This can be very useful to distribute a baseline configuration for a company or monitoring product.
  Then all "machine specific customization" would go into the nsclient.ini config where as client.ini would be reserved for the clients global config. And finally baseline.ini would be monitoring tool specific configuration.
  

## Settings stores ##

Settings are historically stored in an ini file but you can store settings in many other locations as well.
While the most obvious one to use is the registry there are other olptions as well.

- ini files
- old ini files
- registry
- dummy
- http (ini files over http)
  

### Ini settings ###

Ini file are the simplest form of configuration and also the default though on windows registry is probably a better option.
The files are textfiles following the ini file format where yu have sections in brackets [] and key key = values.

<dl>
  <dt>sample.ini :  : </dt>
  <dd>
    <p>[/section/child/section]</p>
    <p>key=value</p>
  </dd>
</dl>
To use an ini file you prefix the settings url with ini:// then you can use various folder strings or specify a relative or absolut path to the file.

<dl>
  <dt>examples :  : </dt>
  <dd>
    <p># Use the relative file foo.ini</p>
    <p>nscp settings --migrate-to ini://foo.ini</p>
    <p># Use the relative file foo.ini in a subfolder called conf</p>
    <p>nscp settings --migrate-to ini://conf/foo.ini</p>
    <p># Use a file stored in the profile folder (on windows): C:\Documents and Settings\All Users\Application Data\NSClient++</p>
    <p>nscp settings --migrate-to ini://%(common-appdata)/NSClient++/nsclient.ini</p>
  </dd>
</dl>
### registry settings ###

Registry is only avalible on windows and using them on windows is recomended as it integrates better with windows and windows managament tools where you can push configuration changes and similar things.
As the registry is naturally a tree structure we use folders as section and keys and values for keys and values.

To use an ini file you prefix the settings url with ini:// then you can use various folder strings or specify a relative or absolut path to the file.

<dl>
  <dt>examples :  : </dt>
  <dd>
    <p># Use the default registry location</p>
    <p>nscp settings --migrate-to registry</p>
    <p># Use HKEY_LOCAL_MACHINE/software/NSClient++ to store configuration</p>
    <p>nscp settings --migrate-to registry://HKEY_LOCAL_MACHINE/software/NSClient++</p>
  </dd>
</dl>
### http settings ###

Registry is a "new" feature this means both that I am interested in how to evolve the feature but also that it does "something" not nesscerily something usefull.
The registry is a regular ini file (see above) ex cept that it is loaded remotely and refreshed periodically.
The refresh period is configurable and if the file has changed NSCLient++ will reload and re-read the new configuration.
If it is not possible to fetch the latest configuration NSClient++ will keep using the last one it recieved.

<dl>
  <dt>examples :  : </dt>
  <dd>
    <p># Use remote configuration.</p>
    <p>nscp settings --switch http://www.myserver.com/nsclient.ini</p>
  </dd>
</dl>
In the nsclient.ini file you can specify a series of attachments which will be downloaded (for instance scripts).

<dl>
  <dt>Adding a script :  : </dt>
  <dd>
    <p>[/attachments]</p>
    <p>scripts/myscript.bat = http://www.myserver.com/myscript.bat</p>
  </dd>
</dl>
## Using settings stores ##

NSClient++ has some fesature to help work with settings stores.
<dl>
  <dt>All of this is performed via the settings sub command :  : </dt>
  <dd>nscp settings --help</dd>
</dl>
<dl>
  <dt>Migrating settings from a ini file to the regstry can be done with the migrate-to command :  : </dt>
  <dd>nscp settings --migrate-to registry</dd>
</dl>
This will move all data from the settings file and store it in in the registry and then sertup NSClient++ to use the registry instead of the ini file.

<dl>
  <dt>You can also switch settings store (without migrating data) :  : </dt>
  <dd>nscp settings --switch registry</dd>
</dl>
The effect is similar in that NSClient++ will start using the registry but you have to add the keys to the registry manually.

<dl>
  <dt>To show the current settings store view can run : </dt>
  <dd>
    <p>$ nscp settings --show</p>
    <p>INI settings: (ini://${shared-path}/nsclient.ini, C:\source\build\x64\dev/nsclient.ini)</p>
  </dd>
</dl>
## Overriding settings store ##

The default way for NSClient++ to find your settings files is via the boot.ini file.
<dl>
  <dt>If you want to override this, for instance you want to use multiple NSClient++ from the same folder, you can do this via the --settings option :  : </dt>
  <dd>nscp test --settings nsclient2.ini</dd>
</dl>
You can do this for the service as well by editing the service start command.

