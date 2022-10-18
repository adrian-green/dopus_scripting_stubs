/**
 *This object represents file attributes (like read only, archived, etc). It used by the Item and Format objects, and can be created by the FSUtil.NewFileAttr method.
 */
class FileAttr {
	/**
	 * <p>Returns a string representing the attributes that are set (similar to
	 *       the format displayed in the <em>Attr</em> column in the file
	 *     display).</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>A file or directory that has changes which need archiving. The A bit is
	 *       usually set on new or modifies files, and may then be cleared by backup
	 *       software after it has added the changes to a backup.</p>
	 * @returns {boolean}
	 */

	archive;
	/**
	 * <p>A file or directory that is compressed. For a file, all of the data in
	 *       the file is compressed. For a directory, compression is the default for
	 *       newly created files and subdirectories.</p>
	 * @returns {boolean}
	 */

	compressed;
	/**
	 * <p>A file or directory that is encrypted. For a file, all data streams in
	 *       the file are encrypted. For a directory, encryption is the default for
	 *       newly created files and subdirectories.</p>
	 * @returns {boolean}
	 */

	encrypted;
	/**
	 * <p>The file or directory is hidden. It is not included in an ordinary
	 *       directory listing.</p>
	 * @returns {boolean}
	 */

	hidden;
	/**
	 * <p>The file or directory is not to be indexed by the content indexing
	 *       service.</p>
	 * @returns {boolean}
	 */

	nonindexed;
	/**
	 * <p>The data of a file is not available immediately. This attribute
	 *       indicates that the file data is physically moved to offline storage. This
	 *       attribute is used by Remote Storage, which is the hierarchical storage
	 *       management software. Applications should not arbitrarily change this
	 *       attribute.</p>
	 * @returns {boolean}
	 */

	offline;
	/**
	 * <p>The data of the file is to be kept available at all times; it should
	 *       not be offloaded to offline storage.</p>
	 * @returns {boolean}
	 */

	pinned;
	/**
	 * <p>A file that is read-only. Applications can read the file, but cannot
	 *       write to it or delete it. This attribute is not honored on
	 *     directories.</p>
	 * @returns {boolean}
	 */

	readonly;
	/**
	 * <p>A file or directory that the operating system uses a part of, or uses
	 *       exclusively.</p>
	 * @returns {boolean}
	 */

	system;

	/**
	 * <p>Assigns a new set of attributes to this object. You can pass another
	 *       <strong>FileAttr</strong> object, or a string (e.g.
	 *   <em>"hsr"</em>).</p>
	 * @param {FileAttr|string} fileattr_or_string
	 *
	 */
	Assign(fileattr_or_string) {
	}

	/**
	 * <p>Given a single character representing an attribute (e.g. <em>"a"</em>)
	 *       this method returns the name of the attribute in the user's current
	 *       language (e.g. <em>"Archive"</em>).</p>
	 * @param {string} name
	 * @returns {string}
	 */
	AttrName(name) {
	}

	/**
	 * <p>Clears (turns off) the specified attributes in this object. You can
	 *       pass another <strong>FileAttr</strong> object, or a string representing
	 *       the attributes to turn off.</p>
	 * @param {FileAttr|string} fileattr_or_string
	 *
	 */
	Clear(fileattr_or_string) {
	}

	/**
	 * <p>Sets (turns on) the specified attributes in this object. You can pass
	 *       another <strong>FileAttr</strong> object, or a string representing the
	 *       attributes to turn on.</p>
	 * @param {FileAttr|string} fileattr_or_string
	 *
	 */
	Set(fileattr_or_string) {
	}

	/**
	 * <p>Returns a string representing the attributes that are set (similar to
	 *       the format displayed in the <em>Attr</em> column in the file
	 *     display).</p>
	 *
	 */
	ToString() {
	}
} //end class
