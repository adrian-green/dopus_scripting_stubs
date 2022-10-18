/**
 *This object provides various statistics about a folder tab (the number of selected files, total number of items, etc). It is obtained from the Tab.stats and Tab.selstats properties.
 */
class TabStats {
	/**
	 * <p>Returns the width in pixels of the largest image in the
	 *   folder.</p>
	 * @returns {int}
	 */

	bigimage_h;
	/**
	 * <p>Returns the height in pixels of the largest image in the
	 *   folder.</p>
	 * @returns {int}
	 */

	bigimage_w;
	/**
	 * <p>Returns the total number of bytes in the folder as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	bytes;
	/**
	 * <p>Returns <strong>True</strong> if the tab is currently in <a href="../Checkbox_Mode.htm">Checkbox Mode</a>.</p>
	 * @returns {boolean}
	 */

	checkbox_mode;
	/**
	 * <p>Returns the total number of bytes in checked items as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	checkedbytes;
	/**
	 * <p>Returns the total number of bytes in checked folders as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	checkeddirbytes;
	/**
	 * <p>Returns the total number of checked folders.</p>
	 * @returns {int}
	 */

	checkeddirs;
	/**
	 * <p>Returns the total number of bytes in checked files as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	checkedfilebytes;
	/**
	 * <p>Returns the total number of checked files.</p>
	 * @returns {int}
	 */

	checkedfiles;
	/**
	 * <p>Returns the total number of checked items.</p>
	 * @returns {int}
	 */

	checkeditems;
	/**
	 * <p>Returns the total length in seconds of all checked music
	 *   files.</p>
	 * @returns {int}
	 */

	checkedmusiclength;
	/**
	 * <p>Returns the total number of bytes in all folders as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	dirbytes;
	/**
	 * <p>Returns the total number of folders.</p>
	 * @returns {int}
	 */

	dirs;
	/**
	 * <p>Returns the total number of bytes in all files as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	filebytes;
	/**
	 * <p>Returns the latest (most recent) file date in the folder.</p>
	 * @returns {date}
	 */

	filedate_max;
	/**
	 * <p>Returns the earliest (oldest) file date in the folder.</p>
	 * @returns {date}
	 */

	filedate_min;
	/**
	 * <p>Returns the total number of files.</p>
	 * @returns {int}
	 */

	files;
	/**
	 * <p>Returns the total number of items.</p>
	 * @returns {int}
	 */

	items;
	/**
	 * <p>Returns the size of the largest file in the folder as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	largestfile;
	/**
	 * <p>Returns the total length in seconds of all music files.</p>
	 * @returns {int}
	 */

	musiclength;
	/**
	 * <p>Returns the total number of bytes in all selected items as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	selbytes;
	/**
	 * <p>Returns the total number of bytes in all selected folders as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	seldirbytes;
	/**
	 * <p>Returns the number of selected folders.</p>
	 * @returns {int}
	 */

	seldirs;
	/**
	 * <p>Returns the total number of bytes in all selected files as a  {@link FileSize}<em>
	 *   </em>object.</p>
	 * @returns {FileSize}
	 */

	selfilebytes;
	/**
	 * <p>Returns the number of selected files.</p>
	 * @returns {int}
	 */

	selfiles;
	/**
	 * <p>Returns the number of selected items.</p>
	 * @returns {int}
	 */

	selitems;
	/**
	 * <p>Returns the total length in seconds of all selected music
	 *   files.</p>
	 * @returns {int}
	 */

	selmusiclength;
	/**
	 * <p>The first time a script accesses a
	 *       particular&nbsp;<strong>TabStats</strong> object, a snapshot is taken of
	 *       the tab state. If the script then makes changes to that tab (e.g. it
	 *       selects files, creates a new folder, etc), these changes will not be
	 *       reflected by the object. To re-synchronize the object with the tab, call
	 *       the <strong>TabStats.Update</strong> method.</p>
	 *
	 */
	Update(){}
} //end class
