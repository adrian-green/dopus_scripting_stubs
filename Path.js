/**
 *This object represents a file system path. It contains several methods to manipulate the path. Path objects are returned by several properties and can be created by the FSUtil.NewPath method.
 */
class Path {
	/**
	 * <p>Returns the full path as a string.</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>Returns the number of components in the path.</p>
	 * @returns {int}
	 */

	components;
	/**
	 * <p>Returns a  {@link Vector}of <em>ints</em>
	 *       representing the physical disk drive or drives that this path resides
	 *       on.</p>
	 * @returns {int}
	 */

	disks;
	/**
	 * <p>Returns the drive number the path refers to (1=A, 2=B, etc.) or 0 if
	 *       the path does not specify a drive. You can also change the drive letter of
	 *       the path (while leaving the following path components alone) by modifying
	 *       this value.</p>
	 * @returns {int}
	 */

	drive;
	/**
	 * <p>Returns the filename extension of the path (the sub-string
	 *       extending&nbsp;from the last <strong>.</strong> in the&nbsp;final
	 *       component to the end of the string). This method does not check if the
	 *       path actually refers to a file.<br><br>You can also change a path's file
	 *       extension by setting this property (and strip the extension altogether by
	 *       setting it to an empty string).</p>
	 * @returns {string}
	 */

	ext;
	/**
	 * <p>Returns the filename extension of the path, taking multi-part
	 *       extensions into account. For example, <strong>ext</strong> might return
	 *       ".rar" whereas <strong>ext_m</strong> would return
	 *       ".part1.rar".<br><br>You can't change the extension using
	 *       <strong>ext_m</strong>, only <strong>ext</strong>.</p>
	 * @returns {string}
	 */

	ext_m;
	/**
	 * <p>Returns the filename part of the path (the last component).</p>
	 * @returns {string}
	 */

	filepart;
	/**
	 * <p>If this object represents a short pathname, this property returns the
	 *       "long" equivalent.</p>
	 * @returns {Path}
	 */

	longpath;
	/**
	 * <p>Returns the path minus the last component.</p>
	 * @returns {string}
	 */

	pathpart;
	/**
	 * <p>If this object represents a long pathname, this property returns the
	 *       "short" equivalent, if it has one. Note that short paths are disabled by
	 *       default in Windows 10.</p>
	 * @returns {Path}
	 */

	shortpath;
	/**
	 * <p>Returns the filename stem of the path (i.e. <strong>filepart</strong>
	 *       minus <strong>ext</strong>).</p>
	 * @returns {string}
	 */

	stem;
	/**
	 * <p>Returns the filename stem taking multi-part extensions into account.
	 *       For example, <strong>stem</strong> might return "pictures.part1" whereas
	 *       <strong>stem_m</strong> would return "pictures".</p>
	 * @returns {string}
	 */

	stem_m;
	/**
	 * <p>Returns <strong>True</strong> if a call to the <strong>Parent</strong>
	 *       method would succeed.</p>
	 * @returns {boolean}
	 */

	test_parent;
	/**
	 * <p>Returns <strong>True</strong> if a call to the <strong>Root</strong>
	 *       method would succeed.</p>
	 * @returns {boolean}
	 */

	test_root;

	/**
	 * <p>Adds the specified name to the path (it will become the last
	 *       component). As well as a string, you can pass a {@link Vector}<em> </em>of strings and all
	 *       items in the vector will be added to the path.</p>
	 * @param {string|Vector} name_or_vector
	 *
	 */
	Add(name_or_vector) {
	}

	/**
	 * <p>Removes the last component of the path. Returns <strong>False</strong>
	 *       if the path does not have a valid parent.</p>
	 * @returns {boolean}
	 */
	Parent() {
	}

	/**
	 * <p>Compares the beginning of the path with the "old" string, and if it
	 *       matches replaces it with the "new" string. The match is performed at the
	 *       path component level - for example, an "old" string of "C:\Foo" would
	 *       match the path "C:\Foo\Bar" but not "C:\FooBar". If the optional
	 *       "wholepath" argument is set to <strong>True</strong> then the whole path
	 *       must match rather than just its beginning. Returns <strong>True</strong>
	 *       if the string matched the path or <strong>False</strong>
	 *   otherwise.</p>
	 * @param {string} oldstring
	 * @param {string} newstring
	 * @param {boolean} wholepath
	 * @returns {boolean}
	 */
	ReplaceStart(oldstring, newstring, wholepath) {
	}

	/**
	 * <p>Strips off all but the first component of the path. Returns
	 *       <strong>False</strong> if the path is already at the root.</p>
	 * @returns {boolean}
	 */
	Root() {
	}

	/**
	 * <p>Sets the path represented by the <strong>Path</strong> object to the
	 *       specified <em>string. </em>You can also set one <strong>Path</strong>
	 *       object to the value of another. If you pass a  {@link Vector}<em> </em>of strings the path
	 *       will be built from the items in the vector.</p>
	 * @param {string|Path|Vector} path_or_path_or_string
	 * @param {Vector} string
	 *
	 */
	Set(path_or_path_or_string, string) {
	}

	/**
	 * <p>Returns a {@link Vector}<em> </em>of
	 *       strings representing the components of the path. For example, if the path
	 *       is <strong>C:\Foo\Bar</strong>, the vector will contain three items -
	 *       "C:\", "Foo" and "Bar". By default all components of the path are
	 *       returned, but you can optionally provide the index of the first component
	 *       and also the number of components to return.</p>
	 * @param {int} first
	 * @param {int} count
	 * @returns {string}
	 */
	Split(first, count) {
	}
} //end class
