/**
 *This object represents a file or a folder. It can be returned from various methods of the Tab object, when enumerating a folder using the FSUtil.ReadDir method, and is used to provide files for a command to act on using the Command object.
 */
class Item {
	/**
	 * <p>Returns the full pathname of the item (i.e. path plus
	 *   filename).</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>Returns the "last accessed" date, in local time.</p>
	 * @returns {Date}
	 */

	access;
	/**
	 * <p>Returns the "last accessed" date, in UTC.</p>
	 * @returns {Date}
	 */

	access_utc;
	/**
	 * <p>Returns the item attributes. This value is a series of flags that are
	 *       logically OR'd together. The attributes supported by Opus are:<br><br>1 -
	 *       read only<br>2 - hidden<br>4 - system<br>32 - archive<br>1024 - reparse
	 *       point (junctions, etc.)<br>2048 - compressed<br>4096 - offline
	 *       storage<br>8192 - not content-indexed<br>16384 - encrypted<br>524288 -
	 *       pinned<br><br>Using the <strong>fileattr </strong>property, which returns
	 *       a  <!--?xml:namespace prefix = "c1" /-->{@link FileAttr}&nbsp;object, may be
	 *       easier than dealing with the raw attribute flags.</p>
	 * @returns {int}
	 */

	attr;
	/**
	 * <p>Returns the item attributes as a string, as displayed in the file
	 *       display.</p>
	 * @returns {string}
	 */

	attr_text;
	/**
	 * <p>Returns <strong>True</strong> if the item was checked (in <a href="../Checkbox_Mode.htm">checkbox mode</a>), or <strong>False</strong>
	 *       otherwise.</p>
	 * @returns {boolean}
	 */

	checked;
	/**
	 * <p>Returns the "creation" date, in local time.</p>
	 * @returns {Date}
	 */

	create;
	/**
	 * <p>Returns the "creation" date, in UTC.</p>
	 * @returns {Date}
	 */

	create_utc;
	/**
	 * <p>For <b>Item</b> objects obtained from a <a href="Viewer11.htm"><b>Viewer</b></a>, this property is <b>True</b> if the
	 *       item represents the currently displayed image and <b>False</b>
	 *       otherwise.</p>
	 *       <p>For <b>Item</b> objects obtained from a file display, the property
	 *       indicates whether or not the item is the one with focus. The <b>focus</b>
	 *       property is the more proper way to check this, but both work in case you
	 *       forget which is which.</p>
	 * @returns {boolean}
	 */

	current;
	/**
	 * <p>Returns the display name of the item. Only a few items have a display
	 *       name that is different to their actual name - some examples are certain
	 *       system folders (like <em>C:\Users</em> which might have a translated
	 *       display name in non-English locales).</p>
	 * @returns {string}
	 */

	display_name;
	/**
	 * <p>Returns the filename extension.</p>
	 * @returns {string}
	 */

	ext;
	/**
	 * <p>Returns the filename extension, taking multi-part extensions into
	 *       account.&nbsp;For example, a file called "file.part1.rar" might return
	 *       ".rar" for <strong>ext</strong> but ".part1.rar" for
	 *       <strong>ext_m</strong>.</p>
	 * @returns {string}
	 */

	ext_m;
	/**
	 * <p>Returns <strong>True </strong>if the item failed when used by a
	 *       command. This is only meaningful in conjunction with the <!--?xml:namespace prefix = "c1" /-->{@link Command}<strong>.files</strong>
	 *       collection -&nbsp;once the command has returned, this property will
	 *       indicate success or failure on a per-file basis.</p>
	 * @returns {boolean}
	 */

	failed;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link FileAttr}&nbsp;object that
	 *       represents the item's attributes.</p>
	 * @returns {FileAttr}
	 */

	fileattr;
	/**
	 * <p>If the file display this item came from is grouped by a particular
	 *       column, this property returns a {@link FileGroup} object representing
	 *       the group the item is in. If the item has no group this will return an
	 *       empty string.</p>
	 * @returns {FileGroup}
	 */

	filegroup;
	/**
	 * <p>For <b>Item</b> objects obtained from a file display, this property is
	 *       <b>True</b> if the object represents the item with focus, and <b>False</b>
	 *       otherwise. Only one item can have focus at a time. The item with focus is
	 *       typically shown with an outline around it, and is usually the last item
	 *       which was clicked on, or which was moved to with the keyboard. The item
	 *       with focus is often also one of the selected items, but not always;
	 *       selection and focus are two separate things.</p>
	 *       <p>For <b>Item</b> objects obtained from a <a href="Viewer11.htm"><b>Viewer</b></a>, the property indicates if the file
	 *       is the one currently shown in the viewer. The <b>current</b> property is
	 *       the more proper way to test this, but <b>focus</b> also works.</p>
	 * @returns {boolean}
	 */

	focus;
	/**
	 * <p>Returns <strong>True</strong> for folder items if their size has been
	 *       calculated by,&nbsp;for example,&nbsp;the {@link GetSizes} command. If
	 *       <strong>False</strong>, the <strong>size </strong>property will be
	 *       unreliable for folders.</p>
	 * @returns {boolean}
	 */

	got_size;
	/**
	 * <p>Returns a  {@link Vector}of <strong><a href="filetypegroup.htm">FiletypeGroup</a> </strong>objects representing
	 *       any and all file type groups that this file is a member of.</p>
	 *       <p>If you only want to check membership of a particular file type group,
	 *       see the <strong>InGroup</strong> method in the section below.</p>
	 * @returns {FiletypeGroup}
	 */

	groups;
	/**
	 * <p>Similar to the groups property, except a  {@link FiletypeGroups}&nbsp;object
	 *       is returned instead of a  <!--?xml:namespace prefix = "c1" /-->{@link Vector}.</p>
	 * @returns {FileTypeGroups}
	 */

	groupsobject;
	/**
	 * <p>This is a unique ID for the item; it is used internally by
	 *   Opus.</p>
	 * @returns {int}
	 */

	id;
	/**
	 * <p>Returns <strong>True</strong> if the item represents a folder, and
	 *       <strong>False</strong> for a file.</p>
	 * @returns {boolean}
	 */

	is_dir;
	/**
	 * <p>Returns <strong>True</strong> if the item is a junction to another
	 *       folder.</p>
	 * @returns {boolean}
	 */

	is_junction;
	/**
	 * <p>Returns <strong>True</strong> if the item is a reparse point.</p>
	 * @returns {boolean}
	 */

	is_reparse;
	/**
	 * <p>Returns <strong>True</strong> if the item is a symbolic link.</p>
	 * @returns {boolean}
	 */

	is_symlink;
	/**
	 * <p>Returns a  {@link Metadata}&nbsp;object that
	 *       provides access to the item's metadata.</p>
	 * @returns {Metadata}
	 */

	metadata;
	/**
	 * <p>Returns the "last modified" date, in local time.</p>
	 * @returns {Date}
	 */

	modify;
	/**
	 * <p>Returns the "last modified" date, in UTC.</p>
	 * @returns {Date}
	 */

	modify_utc;
	/**
	 * <p>Returns the name of the item.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>Returns the filename "stem" of the item. This is the name of the item
	 *       with the filename extension removed. It will be the same as the
	 *       <strong>name</strong> for folders.</p>
	 * @returns {string}
	 */

	name_stem;
	/**
	 * <p>Returns the filename "stem" of the item, taking multi-part extensions
	 *       into account.&nbsp;For example, a file called "file.part1.rar" might
	 *       return "file.part1" for <strong>name_stem</strong> but "file" for
	 *       <strong>name_stem_m</strong>.</p>
	 * @returns {string}
	 */

	name_stem_m;
	/**
	 * <p>Returns the path of the item's parent folder. This does not include the
	 *       name of the item itself, which can be obtained via the
	 *       <strong>name</strong> property.</p>
	 * @returns {Path}
	 */

	path;
	/**
	 * <p>Returns the "real" path of the item. For items located in <a href="../Prefs/Virtual_Folders.htm">virtual folders </a>like <a href="../Libraries.htm">Libraries</a> or <a href="../File_Collections.htm">Collections</a>, this lets you access the
	 *       item's underlying path in the real file system. The
	 *       <strong>realpath</strong> property includes the full path to the item,
	 *       including its own name.</p>
	 * @returns {Path}
	 */

	realpath;
	/**
	 * <p>Returns <strong>True</strong> if the item was selected, or
	 *       <strong>False</strong> otherwise.</p>
	 * @returns {boolean}
	 */

	selected;
	/**
	 * <p>Returns the short path of the item, if it has one. Note that short
	 *       paths are disabled by default in Windows 10.</p>
	 * @returns {Path}
	 */

	shortpath;
	/**
	 * <p>Returns the size of the item as a {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	size;

	/**
	 * <p>Tests the file for membership of the specified file type group.</p>
	 *       <p>Each file type group has two names: An internal name which is always
	 *       the same in all languages, and a display name which may be translated
	 *       differently for each language. The display name is what you see in the
	 *       File Types editor. Groups that come pre-defined when you install Opus have
	 *       internal names like <em>"Archives"</em> and <em>"Music"</em> (which are
	 *       also their English display names). User-defined groups have internal names
	 *       which are unique, automatically generated GUID strings like
	 *       <em>"{C4B716ED-2A9C-43C6-B325-7DADDEEFADA9}"</em>.</p>
	 *       <p>The <em>group</em> argument should be the name of the group you wish to
	 *       test against, e.g. <em>"Music"</em>.</p>
	 *       <p>By default, both the internal name and the display name are checked,
	 *       and a match on either will return true. Prefix the <em>group</em> argument
	 *       with <em>"name:"</em> to restrict the search to internal names, or with
	 *       <em>"disp:"</em> to restrict the search to display names.</p>
	 *       <p>To get a list of all file type groups which the file matches, use the
	 *       <strong>groups</strong> property instead (see the section
	 * above).</p>
	 * @param {string} group
	 * @returns {boolean}
	 */
	InGroup(group) {
	}

	/**
	 * <p>This method returns a <strong><a href="Vector.htm">Vector</a>
	 *       </strong>of strings representing any <a href="../Labels1.htm">labels</a>
	 *       that have been assigned to the item.</p>
	 *       <p>Both arguments are optional. The first is a <a href="../Pattern_Matching_Syntax.htm">wildcard pattern</a> that lets you
	 *       filter the returned labels based on their category. For example, pass
	 *       <em>"Status"</em> to only retrieve a list of status icons assigned to a
	 *       file.</p>
	 *       <p>The second optional argument&nbsp;contains flags keywords that control
	 *       how the labels are returned. The only defined flag
	 *       is&nbsp;<em>"explicit"</em> - if specified, wildcard and label filters
	 *       will not be considered - only explicitly assigned labels will be returned.
	 *       Note that if you want to provide the second argument but don't want to
	 *       filter by category you should pass <em>"*"</em> for the first argument to
	 *       match all categories.</p>
	 * @param {string} category
	 * @param {string} flags
	 * @returns {string}
	 */
	Labels(category, flags) {
	}

	/**
	 * <p>Opens this file and returns a   {@link File}&nbsp;object that lets you
	 *       access its contents as binary data.<br><br>By default the file will be
	 *       opened in <em>read mode</em> - specify <em>"w" </em>for the
	 *       optional&nbsp;<em>mode </em>parameter to open the file in <em>write mode.
	 *       </em>Note that you cannot both read and write with the same
	 *       <strong>File</strong> object.</p>
	 *       <p><br></p>
	 *       <p>When opening in write mode, you can also specify optional flags that
	 *       control how the file is opened:<br><br><em>wc</em> - create a new file,
	 *       only if it doesn't already exist.<br><em>wa </em>- create a new file,
	 *       always. If the file already exists it will be overwritten. (This is the
	 *       default.)<br><em>we</em> - open existing file. The file will not be
	 *       created if it doesn't already exist.<br><em>wo</em> - open existing file.
	 *       If the file doesn't exist it will be created.<br><em>wt</em> - truncate
	 *       existing file. If the file exists it will be truncated. The file will not
	 *       be created if it doesn't already exist.<br><em>d</em> - delete-on-close.
	 *       The file will be automatically deleted when closed.<br><br>When using
	 *       write mode, you may add <em>f</em> (force) to any of the above mode
	 *       strings to tell Opus to clear the read-only file attribute if it blocks
	 *       modifying an existing file; otherwise, attempting to open a read-only file
	 *       for writing will fail. For example, <em>"wof"</em> is like <em>"wo"</em>
	 *       mode but also clears the read-only attribute.<br><br>If you only want to
	 *       make changes to the file's attributes without modifying its data you can
	 *       also specify <em>"m"</em> to open it in <em>modify mode</em>.<br><br>The
	 *       optional <em>window</em> parameter lets you associate the
	 *       <strong>File</strong> object with a <strong><!--?xml:namespace prefix = "c1" /--><a href="Tab.htm">Tab</a>
	 *       </strong>or a {@link Lister}, which will
	 *       be used if Opus needs to display any dialogs (e.g. a UAC elevation
	 *       dialog). You may also specify the string&nbsp;"NoElevate" to prevent UAC
	 *       elevation entirely, or "ElevateNoAsk" to prevent UAC prompts while still
	 *       gaining elevation if something else has already performed it.</p>
	 *       <p>&nbsp;</p>
	 *       <p>A <strong>File</strong> object is always returned, even if the file
	 *       could not be opened. Check <strong>File.error</strong> on the returned
	 *       object immediately after creating it to see if opening the file succeeded.
	 *       Even if the file was not be opened, some of the object's methods may still
	 *       work. For example, if a file doesn't exist then you can't open it or set
	 *       its attributes, but permissions on an existing file may allow you to set
	 *       its attributes while blocking you from modifying it or vice
	 *   versa.</p>
	 * @param {string} mode
	 * @param {object} window
	 * @returns {File}
	 */
	Open(mode, window) {
	}

	/**
	 * <p>Returns the value of the specified shell property for the item. The
	 *       property argument can be the property's&nbsp;PKEY or its name.</p>
	 *       <p>&nbsp;</p>
	 *       <p>If you provide a name then the optional second argument lets you
	 *       control how the properties are looked up by name. If the value of
	 *       <em>type</em> is "R" then the first property whose raw name matches the
	 *       supplied name will be used. If the value is "D" then the first property
	 *       whose display name matches the supplied name will be used. If
	 *       <em>type</em> is omitted then both raw and display names can
	 *       match.<br>&nbsp;</p>
	 *       <p>Note that if a shell property is returned by the system as a SAFEARRAY
	 *       type, it will be converted automatically to a {@link Vector}</p>
	 * @param {string} property
	 * @param {string} type
	 * @returns {*}
	 */
	ShellProp(property, type) {
	}

	/**
	 * <p>Updates the <strong>Item</strong> object from the file on disk. You
	 *       might use this if you had run a command to change an item's timestamp or
	 *       attributes, and wanted to retrieve the new
	 * information.</p>
	 *
	 */
	Update() {
	}
} //end class
