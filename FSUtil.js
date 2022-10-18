/**
 *This object provides various utility methods relating to file system activity. It is obtained from the DOpus.FSUtil property.
 */
class FSUtil {
	/**
	 * <p>Compares the two provided path strings for equality - returns
	 *       <strong>True</strong> if the two paths are equal, or
	 *       <strong>False</strong> if otherwise.</p>
	 *       <p>The optional <strong>flags</strong> parameter lets you modify the
	 *       comparison behavior. This parameter is a string containing zero or more of
	 *       the following letters (case sensitive):</p>
	 *       <ul>
	 *         <li><strong>c</strong> - Makes the path comparison <strong>case
	 *         sensitive</strong>.
	 *         </li><li><strong>p</strong> - Returns <strong>True</strong> if <em>path2</em>
	 *         is equal to or a <strong>parent</strong> of <em>path1</em>.
	 *   </li></ul>
	 * @param {string} path1
	 * @param {string} path2
	 * @param {string} flags
	 * @returns {boolean}
	 */
	ComparePath(path1, path2, flags) {
	}

	/**
	 * <p>Retrieves the display name of a path. This is the form of a path that
	 *       is intended to be displayed to the user, rather than used internally by
	 *       Opus. For example, for a library path it will strip off the internal
	 *       <em>?xxxxxxx</em> notation that Opus uses to identify library member
	 *       folders.</p>
	 *       <p>The optional <strong>flags</strong> parameter lets you modify the
	 *       behavior. This parameter is a string containing zero or more of the
	 *       following letters (case sensitive):</p>
	 *       <ul>
	 *         <li><strong>e</strong> - for editing (returns a string designed for
	 *         editing rather than for display)
	 *         </li><li><strong>f</strong> - file part (returns the display filename rather
	 *         than the entire path)
	 *         </li><li><strong>r</strong> - resolve (resolves library paths to their
	 *         underlying file system folder) </li></ul>
	 * @param {string} path
	 * @param {string} flags
	 * @returns {string}
	 */
	DisplayName(path, flags) {
	}

	/**
	 * <p>Returns a <strong>{@link Drive}&nbsp;objects, one for each
	 *       drive on the system.</p>
	 * @returns {Drive}
	 */
	Drives() {
	}

	/**
	 * <p>Returns <strong>True</strong> if the specified file, folder or device
	 *       exists, or <strong>False</strong> otherwise.</p>
	 * @param {string} path
	 * @returns {boolean}
	 */
	Exists(path) {
	}

	/**
	 * <p>Returns a  {@link StringSet}&nbsp;containing the
	 *       names of any alternate data streams (ADS) found for the specified file or
	 *       folder.</p>
	 * @param {string} path
	 * @returns {StringSet}
	 */
	GetADSNames(path) {
	}

	/**
	 * <p>Returns the localized text description for a system error
	 *   code.</p>
	 * @param {int} error
	 * @returns {string}
	 */
	GetErrorMsg(error) {
	}

	/**
	 * <p>Creates an {@link Item}&nbsp;object for
	 *       the specified file path.</p>
	 * @param {string} path
	 * @returns {Item}
	 */
	GetItem(path) {
	}

	/**
	 * <p>Returns a  {@link Metadata}&nbsp;object
	 *       representing the metadata for the specified file. </p>
	 * @param {string} path
	 * @returns {Metadata}
	 */
	GetMetadata(path) {
	}

	/**
	 * <p>Returns the value of one or more shell properties for the specified
	 *       file.</p>
	 *       <p>The file path must be provided as the first parameter.</p>
	 *       <p>The second parameter can be the name (or PKEY) of a property to
	 *       retrieve, in which case the property value will be returned.</p>
	 *       <p>Alternatively, the second argument can be a {@link Map}object which lets you retrieve
	 *       multiple properties at once. Each property you want to retrieve should be
	 *       added to the {@link Map}with its name as a
	 *       key, with an empty string as its value. The values in the
	 *       <strong>Map</strong>&nbsp;will be replaced by the property values.</p>
	 *       <p>The optional <strong>type</strong> argument is a string that lets you
	 *       control how the properties are looked up by name (not case-sensitive):</p>
	 *       <ul>
	 *         <li><strong>R</strong> - The first property whose raw name matches will
	 *         be used.
	 *         </li><li><strong>D</strong> - The first property whose display name matches
	 *         will be used.
	 *         </li><li>If neither is specified, both raw and display names can match.
	 *       </li></ul>
	 *       <p>Note that if a shell property is returned by the system as a SAFEARRAY
	 *       type, it will be converted automatically to a <strong><a href="Vector.htm">Vector</a> </strong><!--?xml:namespace prefix = "c1" /-->object.</p>
	 * @param {string|Map} path_or_properties
	 * @param {Map} properties
	 * @param {string} type
	 * @returns {variant}
	 */
	GetShellProperty(path_or_properties, properties, type) {
	}

	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link ShellProperty} objects which
	 *       represents all the possible shell properties available on the system.</p>
	 *       <p>You can optionally provide a wildcard <em>pattern</em> as the first
	 *       argument - if you do, only properties whose names match the supplied
	 *       pattern will be returned.</p>
	 *       <p>The optional <strong>type</strong> argument is a string that lets you
	 *       restrict the list of properties further (not case-sensitive):</p>
	 *       <ul>
	 *         <li><strong>R</strong> - Property raw names must match the pattern.
	 *         </li><li><strong>D</strong> - Property display names must match the pattern.
	 *         </li><li>If neither is specified, both raw and display names can match.
	 *       </li></ul>
	 * @param {string} pattern
	 * @param {string} type
	 * @returns {ShellProperty}
	 */
	GetShellPropertyList(pattern, type) {
	}

	/**
	 * <p>Creates a temporary folder (with a unique name) and returns the path to
	 *       it in a  <!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;object. Temporary folders
	 *       created with this method have a limited lifetime after which Opus will
	 *       automatically delete them (it will also clean them up when it's shutdown
	 *       and restarted). The default lifetime is 20 minutes; you can change this
	 *       using the optional parameter.</p>
	 * @param {int} lifetime
	 * @returns {Path}
	 */
	GetTempDirPath(lifetime) {
	}

	/**
	 * <p>Creates a temporary file and returns a  {@link File} object ready to be written
	 *       to.</p>
	 *       <p>The returned object supports both reading and writing, without having
	 *       to open the file a second time (although you can do that if it is
	 *       easier).</p>
	 *       <p>You can obtain the name of the file using the  {@link File}.path property.</p>
	 *       <p>An optional filename <strong>suffix </strong>can be specified; if not
	 *       provided (or an empty string is passed), the default is ".tmp".</p>
	 *       <p>An optional <strong>prefix </strong>can also be specified; if not
	 *       provided (or an empty string is passed), the default is "dop".</p>
	 *       <p>Between the suffix and prefix, Opus will insert additional characters
	 *       into the name to ensure it is unique.</p>
	 *       <p>As an example,
	 *       <strong>DOpus.FSUtil.GetTempFilePath(".txt","cat-")</strong> might
	 *       generate
	 *       <em>C:\Users\Leo\AppData\Local\Temp\cat-202106230928470962.txt</em> for a
	 *       file path.</p>
	 *       <p>The optional <strong>flags </strong>parameter can include zero or more
	 *       of these letters (not case-sensitive):</p>
	 *       <ul>
	 *         <li><strong>d</strong> - delete-on-close. File will be deleted
	 *         automatically when closed.
	 *         </li><li><strong>p</strong> - permit deletion. Other processes can delete the
	 *         file.
	 *         </li><li><strong>r</strong> - read shareable. Other processes can read the
	 *         file.
	 *         </li><li><strong>w</strong> - write shareable. Other processes can write to
	 *         the file. </li></ul>
	 *       <p>The read, write and deletion sharing modes affect what other processes
	 *       are allowed to do while the file is still open. Once the file is closed
	 *       (assuming it has not been auto-deleted), other processes are always free
	 *       to read, write or delete the file.</p>
	 *       <p>When delete-on-close is used, other things may not be able to open the
	 *       file unless they specifically permit the file to be deleted at the time
	 *       they open it.</p>
	 *       <p>The optional <strong>window</strong> parameter lets you associate the
	 *       <strong>File</strong> object with a <strong><!--?xml:namespace prefix = "c1" /--><a href="Tab.htm">Tab</a>
	 *       </strong>or a {@link Lister}, which will
	 *       be used if Opus needs to display any dialogs (e.g. a UAC elevation
	 *       dialog).&nbsp;&nbsp;</p>
	 * @param {string} suffix
	 * @param {string} prefix
	 * @param {string} flags
	 * @param {object} window
	 * @returns {File}
	 */
	GetTempFile(suffix, prefix, flags, window) {
	}

	/**
	 * <p>Creates a temporary&nbsp;file (with a unique name) and returns the path
	 *       to it in a  <!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;object.</p>
	 *       <p>An optional filename <strong>suffix </strong>can be specified; if not
	 *       provided (or an empty string is passed), the default is ".tmp".</p>
	 *       <p>An optional <strong>prefix </strong>can also be specified; if not
	 *       provided (or an empty string is passed), the default is "dop".</p>
	 *       <p>Between the suffix and prefix, Opus will insert additional characters
	 *       into the name to ensure it is unique.</p>
	 *       <p>As an example,
	 *       <strong>DOpus.FSUtil.GetTempFilePath(".txt","cat-")</strong> might
	 *       generate
	 *       <em>C:\Users\Leo\AppData\Local\Temp\cat-202106230928470962.txt</em> for a
	 *       file path.</p>
	 * @param {string} suffix
	 * @param {string} prefix
	 * @returns {Path}
	 */
	GetTempFilePath(suffix, prefix) {
	}

	/**
	 * <p>Returns a string indicating the type of the specified file path. The
	 *       string will be either <strong>file</strong>, <strong>dir</strong> or
	 *       <strong>invalid</strong> if the path doesn't exist.</p>
	 *       <p>The optional <strong>flags</strong> argument is used to control the
	 *       behavior with archives. Normally, an archive will be reported as
	 *       <strong>dir</strong>, but if you specify "<strong>a</strong>" for the
	 *       flags parameter it will be reported as <strong>file</strong>.</p>
	 * @param {string} path
	 * @param {string} flags
	 * @returns {string}
	 */
	GetType(path, flags) {
	}

	/**
	 * <p>Calculates a checksum for the specified file or {@link Blob}.</p>
	 *       <p>By default, the MD5 hash is calculated, but you can use the optional
	 *       <strong>type</strong> parameter to change the hash/checksum algorithm.
	 *       Valid values are (not case-sensitive):</p>
	 *       <ul>
	 *         <li><strong>md5</strong>
	 *         </li><li><strong>sha1</strong>
	 *         </li><li><strong>sha256</strong>
	 *         </li><li><strong>sha512</strong>
	 *         </li><li><strong>crc32</strong>
	 *         </li><li><strong>crc32_php</strong>
	 *         </li><li><strong>crc32_php_rev</strong> </li></ul>
	 *       <p>You can also specify multiple types (e.g. <em>"md5,sha1,sha256"</em>)
	 *       at once, in which case the specified checksums will be calculated at the
	 *       same time, and the result will be returned as a {@link Vector} of <em>strings</em> (in the
	 *       same order as you requested them).</p>
	 *       <p>Unlike the other algorithms, CRC32 is a concept rather than a
	 *       well-defined standard. We have provided the three CRC32 implementations
	 *       you're most likely to encounter:</p>
	 *       <ul>
	 *         <li><em>CRC32</em> is most common in the Windows world and matches what
	 *         tools like 7-Zip and PKZip call "CRC32", and what PHP calls "CRC32b".
	 *         </li><li><em>CRC32_PHP</em> is less common and matches what BZIP2 uses and
	 *         what PHP outputs by default.
	 *         </li><li><em>CRC32_PHP_REV</em> is the same as <em>CRC32_PHP</em> but with
	 *         the result's byte-order reversed, as output by some tools. </li></ul>
	 *       <p><em>Example (VBScript):</em>
	 *       <strong>DOpus.FSUtil.Hash("C:\Windows\Notepad.exe","md5")</strong></p>
	 * @param {string} path
	 * @param { or} or
	 * @param {object} Blob
	 * @param {string} type
	 * @returns {string|Vector}
	 */
	Hash(path, or, Blob, type) {
	}

	/**
	 * <p>Creates a new  {@link FileAttr}&nbsp;object, which
	 *       represents file attributes.</p>
	 *       <p>You can initialize the new object by passing either a string
	 *       representing the attributes to turn on (e.g. <em>"hsr"</em>) or another  {@link FileAttr}&nbsp;object. If you
	 *       don't pass a value, the new object will default to all attributes turned
	 *       off.</p>
	 * @param {string|FileAttr} attributes
	 * @returns {FileAttr}
	 */
	NewFileAttr(attributes) {
	}

	/**
	 * <p>Creates a new  {@link FileSize}&nbsp;object, which makes
	 *       it easier to handle 64 bit file sizes.</p>
	 *       <p>You can initialize this with a number of data types (<em>int</em>,
	 *       <em>string</em>, <em>decimal</em>, <em>currency</em>, another   {@link Blob} containing exactly 1, 2, 4 or 8
	 *       bytes). You can use a hexadecimal string by pre-pending <strong>$</strong>
	 *       or <strong>0x</strong>.</p>
	 *       <p><em>Example (VBScript):</em>
	 *       <strong>DOpus.FSUtil.NewFileSize(1024)</strong></p>
	 *       <p>When only a size is specified, the result will be an <em>unsigned</em>
	 *       value, which means it can represent larger size values but cannot
	 *       represent negative values.</p>
	 *       <p>To create a <em>signed</em> value instead, specify "<strong>s</strong>"
	 *       as the first parameter and specify the size as the second parameter. This
	 *       is case-sensitive; it must be a lowercase s.</p>
	 *       <p><em>Example (VBScript):</em> <strong>DOpus.FSUtil.NewFileSize("s",
	 *       -1024)</strong></p>
	 * @param {string|int|float|FileSize|Blob} signedflag_or_value
	 * @param {int} [size]
	 * @returns {FileSize}
	 */
	NewFileSize(signedflag_or_value, size) {
	}

	/**
	 * <p>Creates a new  <!--?xml:namespace prefix = "c1" /-->{@link Path}object initialised to the
	 *       provided path string.</p>
	 * @param {string} path
	 * @returns {Path}
	 */
	NewPath(path) {
	}

	/**
	 * <p>Creates a new  {@link Wild}&nbsp;object.</p>
	 *       <p>If a <strong>pattern</strong> and <strong>flags</strong> are provided,
	 *       the pattern will be parsed automatically; otherwise, you must call the
	 *       <strong>Parse </strong>method on the returned object before using it.</p>
	 *       <p>See the description of the   {@link Wild}<strong>.Parse</strong> method
	 *       for a list of the valid flags.</p>
	 * @param {string} pattern
	 * @param {string} flags
	 * @returns {Wild}
	 */
	NewWild(pattern, flags) {
	}

	/**
	 * <p>Opens or creates a file and returns a  {@link File}&nbsp;object that lets you
	 *       access its contents as binary data.</p>
	 *       <p>A <strong>File</strong> object is always returned, even if the file
	 *       could not be opened. Check <strong>File.error</strong> on the returned
	 *       object immediately after creating it to see if opening the file
	 *       succeeded.</p>
	 *       <p>Even if a file was not be opened, some of the returned object's methods
	 *       may still work. For example, if a file exists but permissions block you
	 *       from opening it, you may still be able to change its attributes, or vice
	 *       versa.</p>
	 *       <p>The first argument can be either:</p>
	 *       <ul>
	 *         <li>A string or  <!--?xml:namespace prefix = "c1" /-->{@link Path}object which specifies the
	 *         file to open.
	 *         </li><li>An existing {@link Blob}object to
	 *         create a  {@link File}&nbsp;object that gives you
	 *         read/write stream access to a chunk of memory. </li></ul>
	 *       <p>When opening a {@link Blob}, the
	 *       created object will always be in <em>read-write mode</em> and the rest of
	 *       the parameters (<strong>mode</strong> and
	 *       <strong>window</strong>/<strong>elevation</strong>) are not used and need
	 *       not be specified.</p>
	 *       <p>When opening a file, the optional <strong>mode</strong> parameter
	 *       specifies how to open it (case sensitive):</p>
	 *       <ul>
	 *         <li><strong>r</strong> - <em>Read mode</em>. The file can be read but
	 *         not written. (This is the default.)
	 *         </li><li><strong>w</strong> - <em>Write mode</em>. The file can be written,
	 *         but not read.
	 *         </li><li><strong>rw</strong> - <em>Read-write mode</em>. The file can be read
	 *         and written from the same object. </li></ul>
	 *       <p>When opening in <em>write mode</em> or <em>read-write mode</em>, you
	 *       can specify additional <strong>mode</strong> flags that control how the
	 *       file is created or opened (case sensitive):</p>
	 *       <ul>
	 *         <li><strong>c</strong> - Create a new file, only if it doesn't already
	 *         exist. The call will fail if the file already exists.
	 *         </li><li><strong>a</strong> - Create a new file, always. If the file already
	 *         exists, it will be overwritten, i.e. truncated to zero length. (This is
	 *         the default if <strong>w</strong> or <strong>rw</strong> are used on
	 *         their own.)
	 *         </li><li><strong>e</strong> - Open existing file. The call will fail if the
	 *         file does not already exist.
	 *         </li><li><strong>o</strong> - Open existing file. The file will be created if
	 *         it does not exist.
	 *         </li><li><strong>t</strong> - Truncate existing file. If the file exists, it
	 *         will be truncated to zero length. If the file doesn't exist, the call
	 *         will fail. </li></ul>
	 *       <p>The <strong>mode</strong> flags can also include these letters (case
	 *       sensitive):</p>
	 *       <ul>
	 *         <li><strong>d</strong> - Delete-on-close. The file will be automatically
	 *         deleted when closed. (If something else also has the file open, it won't
	 *         be deleted until everything closes it.)
	 *         </li><li><strong>f</strong> - Force. Opus will clear the file's read-only
	 *         attribute if it blocks opening the file for writing; otherwise,
	 *         attempting to open a read-only file for writing will fail. For example,
	 *         "<strong>wof</strong>" is like "<strong>wo</strong>" mode but also
	 *         clears the read-only attribute.
	 *         </li><li><strong>m</strong> - Modify mode. Use this if you want to use the
	 *         <strong>File</strong> object to read or modify the file's attributes, or
	 *         get the file's size, without reading or writing the actual file
	 *         contents.
	 *         </li><li><strong>p</strong> - Permit deletion. Other processes can delete the
	 *         file before it has been closed, although any deletion will not take
	 *         place until it is closed. </li></ul>
	 *       <p>Files opened via this method always permit other readers and writers.
	 *       Your script should not assume it has an exclusive lock on the file or its
	 *       contents.</p>
	 *       <p>When opening an existing file which something else already flagged for
	 *       deletion, including files already open in <em>delete-on-close</em> mode,
	 *       the <strong>p</strong> (permit deletion) flag must be specified.</p>
	 *       <p>Non-Windows filesystems may have different locking and sharing rules.
	 *       Opus will pass the requested flags to them, but it is ultimately up to
	 *       them how they behave.</p>
	 *       <p>The optional third parameter takes either a <strong>window</strong>
	 *       object or a string indicating <strong>elevation</strong> mode. This
	 *       parameter influences the behavior of UAC elevation prompts (and
	 *       potentially other user interface elements) that may be triggered when
	 *       opening the file. It can be one of the following:</p>
	 *       <ul>
	 *         <li>An Opus <strong>{@link Lister} object which UAC prompts
	 *         will appear over if elevation is required and has not already been
	 *         obtained.
	 *         </li><li>The string "<strong>NoElevate</strong>" to prevent UAC elevation
	 *         entirely when opening this file.
	 *         </li><li>The string "<strong>ElevateNoAsk</strong>" to prevent UAC prompts
	 *         while still gaining elevation if something else already got it (e.g. a
	 *         previous <strong>OpenFile</strong> call). </li></ul>
	 *       <p><em>Example (VBScript):</em><br>&nbsp;&nbsp;<strong>Set F =
	 *       DOpus.FSUtil.OpenFile("C:\Test.txt","wrcf","NoElevate")</strong></p>
	 * @param {string|object|string} path_or_Blob_or_elevation
	 * @param {object} window
	 * @param { or } or
	 * @param {string} elevation
	 * @returns {File}
	 */
	OpenFile(path_or_Blob_or_elevation, window, or, elevation) {
	}

	/**
	 * <p>Returns a  {@link FolderEnum}&nbsp;object that
	 *       lets you enumerate the contents of the specified folder.</p>
	 *       <p>The optional <strong>flags</strong> string can include zero or more
	 *       flag characters (not case-sensitive):</p>
	 *       <ul>
	 *         <li><strong>r</strong> - <strong>r</strong>ecurse. Recursively enumerate
	 *         the folder, listing the contents of the folder, its sub-folders, their
	 *         sub-folders, and so on.
	 *         </li><li><strong>l</strong> - skip <strong>l</strong>inks. Prevents the
	 *         traversal of symbolic links and junctions when recursively enumerating
	 *         folders.
	 *         </li><li><strong>s</strong> - <strong>s</strong>hell enumeration. Ask's the
	 *         Windows Shell to enumerate non-filesystem folders. For example, the
	 *         <em>Quick Access</em> folder on Windows 10 could be enumerated with
	 *         <strong>ReadDir("/quickaccess","s")</strong>; it would not work without
	 *         the "<strong>s</strong>" because Quick Access is not a real filesystem
	 *         directory. </li></ul>
	 *       <p>If you don't need any flags, skip the second argument entirely.</p>
	 *       <p>You may see older scripts pass <strong>True</strong> and
	 *       <strong>False</strong> as the second argument, to turn recursion on and
	 *       off; that is deprecated but remains supported for compatibility.</p>
	 * @param {string} path
	 * @param {string} flags
	 * @returns {FolderEnum}
	 */
	ReadDir(path, flags) {
	}

	/**
	 * <p>Resolves the specified path string to its real filesystem path, with
	 *       support for converting:</p>
	 *       <ul>
	 *         <li><strong><a href="../Aliases.htm">Folder Aliases</a></strong> to the
	 *         real paths they point to.
	 *         </li><li><strong>Library</strong> and <strong>File Collection</strong> items
	 *         to their real filesystem paths.
	 *         </li><li>Application paths in the <strong>{apppath|<em>appname</em>}</strong>
	 *         form.
	 *         </li><li>Optionally, <strong>junctions</strong> and <strong>symbolic
	 *         links</strong> can be resolved to their targets. </li></ul>
	 *       <p>It is safe to pass a path which does not need resolving; the path will
	 *       be returned unmodified, so you can call this on things without checking if
	 *       it is needed first.</p>
	 *       <p>Scripts which pass the current directory to external software should
	 *       generally call Resolve on the path first, otherwise they risk passing
	 *       aliases like <em>/desktop</em> to things which won't understand it.</p>
	 *       <p>The optional <strong>flags</strong> string can include the following
	 *       letter (not case-sensitive):</p>
	 *       <ul>
	 *         <li><strong>j</strong> - resolve <strong>j</strong>unctions and symbolic
	 *         links to their target folder </li></ul>
	 * @param {string} path
	 * @param {string} flags
	 * @returns {Path}
	 */
	Resolve(path, flags) {
	}

	/**
	 * <p>Returns <strong>True</strong> if the two specified paths both refer to
	 *       the same drive or partition.</p>
	 *       <p>The optional <strong>flags</strong> string can contain zero or more of
	 *       the following letters (case sensitive):</p>
	 *       <ul>
	 *         <li><strong>c</strong> - Consider the <strong>CD burning staging
	 *         area</strong> the same as the CD (or other writable optical media)
	 *         itself.
	 *         </li><li><strong>m</strong> - Handle <strong>NTFS mount points</strong>.
	 *         (Slower but more accurate if either path may be below a mount point
	 *         which really points to a different drive.)
	 *         </li><li><strong>r</strong> - Real paths only. (Skip extra processing that is
	 *         only useful for things like FTP sites and MTP devices.)
	 *         </li><li><strong>s</strong> - Test if paths point to the same drive via drive
	 *         letters created by the Windows <strong>subst</strong> command.
	 *         </li><li><strong>u</strong> - Compare <strong>FTP users</strong>. (By
	 *         default, FTP paths are considered the "same drive" if they point to the
	 *         same FTP site. The <strong>u</strong> flag adds the requirement that
	 *         both paths have the same user name.)
	 *         </li><li><strong>z</strong> - If <strong>path1</strong> is <em>inside</em> a
	 *         Zip file or other archive, only consider <strong>path2</strong> on the
	 *         "same drive" if it is the archive itself or is <em>inside</em> the same
	 *         archive.
	 *         </li><li><strong>Z</strong> - If <strong>path1</strong> is <em>inside</em> a
	 *         Zip file or other archive, only consider <strong>path2</strong> on the
	 *         "same drive" if it is <em>inside</em> the same archive. </li></ul>
	 *       <p>When neither <strong>z</strong> nor <strong>Z</strong> are specified,
	 *       archives are essentially treated like normal directories and will be
	 *       considered on the "same drive" as any path pointing to the same drive the
	 *       archive is on, including other archive paths on that
	 *   drive.</p>
	 * @param {string} path1
	 * @param {string} path2
	 * @param {string} flags
	 * @returns {boolean}
	 */
	SameDrive(path1, path2, flags) {
	}
} //end class
