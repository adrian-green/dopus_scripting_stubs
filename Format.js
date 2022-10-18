/**
 *This object provides information about the display format in a tab. It is obtained from the Tab.format property.
 */
class Format {
	/**
	 * <p>Returns <strong>True</strong> if folders are always sorted
	 *       alphabetically, <strong>False</strong> if otherwise.</p>
	 * @returns {boolean}
	 */

	alpha_folders;
	/**
	 * <p>Returns <strong>True</strong> if column width auto-sizing is enabled,
	 *       <strong>False</strong> if otherwise.</p>
	 * @returns {boolean}
	 */

	autosize;
	/**
	 * <p>Returns a collection of  {@link Column}&nbsp;objects that represent
	 *       all the individual columns currently added to the display.</p>
	 * @returns {Column[]}
	 */

	columns;
	/**
	 * <p>Returns a {@link Vector}of strings
	 *       representing the explanation of the current folder format&nbsp;(the same
	 *       text visible when hovering the mouse over the format lock icon in the
	 *       status bar).</p>
	 * @returns {string}
	 */

	format_explain;
	/**
	 * <p>Returns a string that indicates the state of the option to
	 *       automatically calculate folder sizes. The string returned will be one of
	 *       <em>default</em>, <em>on</em> or <em>off</em>.</p>
	 * @returns {string}
	 */

	getsizes;
	/**
	 * <p>If grouping is enabled, returns the name of the column that the list is
	 *       grouped by.</p>
	 * @returns {string}
	 */

	group_by;
	/**
	 * <p>Returns <strong>True</strong> if the <strong>Individual groups</strong>
	 *       option is enabled.</p>
	 * @returns {boolean}
	 */

	group_individual;
	/**
	 * <p>Returns <strong>True</strong> if the groups are sorted in reverse
	 *       order.</p>
	 * @returns {boolean}
	 */

	group_reverse;
	/**
	 * <p>Returns a  {@link FileAttr}&nbsp;object indicating
	 *       the file attributes that are hidden (any items with these attributes set
	 *       will be hidden from the display).</p>
	 * @returns {FileAttr}
	 */

	hide_attr;
	/**
	 * <p>Returns the wildcard pattern of folders that are hidden from the
	 *       display.</p>
	 * @returns {string}
	 */

	hide_dirs;
	/**
	 * <p>Returns <strong>True</strong> if the current <b>hide_dirs</b> pattern
	 *       is using regular expressions.</p>
	 * @returns {boolean}
	 */

	hide_dirs_regex;
	/**
	 * <p>Returns <strong>True</strong> if filename extensions are hidden, or
	 *       <strong>False</strong> if they are displayed.</p>
	 * @returns {boolean}
	 */

	hide_ext;
	/**
	 * <p>Returns the wildcard pattern of files that are hidden from the
	 *       display.</p>
	 * @returns {string}
	 */

	hide_files;
	/**
	 * <p>Returns <strong>True</strong> if the current <b>hide_files</b> pattern
	 *       is using regular expressions.</p>
	 * @returns {boolean}
	 */

	hide_files_regex;
	/**
	 * <p>Returns a  {@link FileAttr}&nbsp;object indicating
	 *       the&nbsp;folder attributes that are hidden (any folders with these
	 *       attributes set will be hidden from the display). If the separate folder
	 *       attribute filter is disabled this property will return the string
	 *       <strong>"off"</strong>.</p>
	 * @returns {FileAttr|string}
	 */

	hide_folder_attr;
	/**
	 * <p>Returns the filename prefixes that are ignored when sorting the
	 *       list.</p>
	 * @returns {string}
	 */

	ignore_prefix;
	/**
	 * <p>Returns <strong>True</strong> if the folder format is locked in the
	 *       tab.</p>
	 * @returns {boolean}
	 */

	locked;
	/**
	 * <p>Returns <strong>True</strong> if <a href="../Manual_Sorting1.htm">manual sorting</a> is enabled.</p>
	 * @returns {boolean}
	 */

	manual_sort;
	/**
	 * <p>If manual sorting is active, returns the name of the current sort order
	 *       (if it has one).</p>
	 * @returns {string}
	 */

	manual_sort_name;
	/**
	 * <p>If manual sort is active, returns a  {@link SortOrder}&nbsp;object which lets
	 *       you query and change the sort order.</p>
	 * @returns {SortOrder}
	 */

	manual_sort_order;
	/**
	 * <p>Returns a string indicating the current file/folder mixing type. The
	 *       string returned will be one of <em>mixed</em>, <em>files</em> (files
	 *       first) or <em>dirs </em>(folders first).</p>
	 * @returns {string}
	 */

	mix_type;
	/**
	 * <p>Returns <strong>True</strong> if filenames and extensions are sorted
	 *       separately.</p>
	 * @returns {boolean}
	 */

	name_ext;
	/**
	 * <p>Returns <strong>True</strong> if numeric name sorting is
	 *   enabled.</p>
	 * @returns {boolean}
	 */

	numeric_name;
	/**
	 * <p>Returns <strong>True</strong> if the over-all sort order is
	 *       reversed.</p>
	 * @returns {boolean}
	 */

	reverse_sort;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link FileAttr}&nbsp;object indicating
	 *       the file attributes that are shown (only items with these attributes set
	 *       will be shown in the display).</p>
	 * @returns {FileAttr}
	 */

	show_attr;
	/**
	 * <p>Returns the wildcard pattern of folders that are shown (only folders
	 *       matching this pattern will be shown).</p>
	 * @returns {string}
	 */

	show_dirs;
	/**
	 * <p>Returns <strong>True</strong> if the current <b>show_dirs</b> pattern
	 *       is using regular expressions.</p>
	 * @returns {boolean}
	 */

	show_dirs_regex;
	/**
	 * <p>Returns the wildcard pattern of files that are shown.</p>
	 * @returns {string}
	 */

	show_files;
	/**
	 * <p>Returns <strong>True</strong> if the current <b>show_files</b> pattern
	 *       is using regular expressions.</p>
	 * @returns {boolean}
	 */

	show_files_regex;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link FileAttr}&nbsp;object indicating
	 *       the&nbsp;folder attributes that are&nbsp;shown (only folders with these
	 *       attributes set will be shown in the display). If the separate folder
	 *       attribute filter is disabled this property will return the string
	 *       <strong>"off"</strong>.</p>
	 * @returns {FileAttr|string}
	 */

	show_folder_attr;
	/**
	 * <p>Returns <strong>True</strong> if the name column is sorted by filename
	 *       extension rather than filename.</p>
	 * @returns {boolean}
	 */

	sort_ext;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link Column}&nbsp;object representing the
	 *       current sort field.</p>
	 * @returns {Column}
	 */

	sort_field;
	/**
	 * <p>Returns the current <a href="../View_Modes.htm">view mode</a> as a
	 *       string. The returned string will be one of <em>large</em>_<em>icons</em>,
	 *       <em>small</em>_<em>icons</em>, <em>list</em>, <em>details</em>,
	 *       <em>power</em>, <em>thumbnails</em> or <em>tile.</em></p>
	 * @returns {string}
	 */

	view;
	/**
	 * <p>Returns <strong>True</strong> if word sorting is
	 *   enabled.</p>
	 * @returns {boolean}
	 */

	word_sort;
	/**
	 * <p>The first time a script accesses a
	 *       particular&nbsp;<strong>Format</strong> object, a snapshot is taken of the
	 *       tab's format. If the script then makes changes to that tab (e.g. it
	 *       changes the sort field, etc), these changes will not be reflected by the
	 *       object. To re-synchronize the object with the tab, call the
	 *       <strong>Format.Update</strong> method.</p>
	 *
	 */
	Update(){}
} //end class
