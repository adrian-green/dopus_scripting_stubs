/**
 *This object represents a folder tab in a Lister. A Lister's tabs are available via various Lister object properties (e.g. Lister.activetab) and also used to specify the source/destination of a command (e.g. Command.sourcetab).
 */
class Tab {
	/**
	 * <p>Returns a collection of  {@link Item}&nbsp;objects that represents all
	 *       the files and folders currently displayed in this tab.<br><br>Note: The
	 *       first time a script accesses this property (and all&nbsp;the other
	 *       properties that return an <!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;collection), a snapshot is
	 *       taken of all the appropriate items. If the script then makes changes to
	 *       those items (e.g. by creating a new file, modifying the selection, etc),
	 *       these changes will not be reflected by the collection. To re-synchronize
	 *       the collection call the <strong>Update</strong> method on the
	 *       collection.</p>
	 * @returns {Item[]}
	 */

	all;
	/**
	 * <p>Returns a collection of <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;objects that represents the
	 *       paths in the "backward" history list for this tab (i.e. the folders you
	 *       would get to by clicking the <em>Back </em>button).</p>
	 * @returns {Path[]}
	 */

	backlist;
	/**
	 * <p>Returns the tab's assigned color (if one has been assigned via, for
	 *       example, the <strong>Go TABCOLOR </strong>command). The color is returned
	 *       as a string in R,G,B format.</p>
	 * @returns {string}
	 */

	color;
	/**
	 * <p>Returns the current path from the tab's breadcrumb control (if it has
	 *       one), including any ghost path.</p>
	 * @returns {Path}
	 */

	crumbpath;
	/**
	 * <p>Returns a collection of  {@link Item}&nbsp;objects that represents all
	 *       the folders currently displayed in this tab.</p>
	 * @returns {Item[]}
	 */

	dirs;
	/**
	 * <p>Returns <strong>True</strong> if the tab is marked as dirty, indicating
	 *       its list of contents may be out of date. This can happen if the tab is in
	 *       the background and the user has turned off the <strong>Preferences /
	 *       Folder Tabs / Options / Process file changes in background tabs
	 *       </strong>option.</p>
	 * @returns {boolean}
	 */

	dirty;
	/**
	 * <p>Returns the currently displayed label of this tab.</p>
	 * @returns {string}
	 */

	displayed_label;
	/**
	 * <p>Returns a collection of {@link FileGroup} objects&nbsp;that
	 *       represents all the file groups in the tab (when the tab is grouped). You
	 *       can use the <strong>format.group_by</strong> property to test if the tab
	 *       is grouped or not.</p>
	 * @returns {FileGroup[]}
	 */

	filegroups;
	/**
	 * <p>Returns a collection of  {@link Item}&nbsp;objects that represents all
	 *       the files currently displayed in this tab.</p>
	 * @returns {Item[]}
	 */

	files;
	/**
	 * <p>Returns a {@link Format} object
	 *       representing the current folder format in this tab.</p>
	 * @returns {Format}
	 */

	format;
	/**
	 * <p>Returns a collection of <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;objects that represents the
	 *       paths in the "forward" history list for this tab (i.e. the folders you
	 *       would get to by clicking the <em>Forward </em>button).</p>
	 * @returns {Path[]}
	 */

	forwardlist;
	/**
	 * <p>Returns a collection of  {@link Item}&nbsp;objects that represents all
	 *       the&nbsp;files and folders currently hidden from this tab.</p>
	 * @returns {Item[]}
	 */

	hidden;
	/**
	 * <p>Returns a collection of   {@link Item}&nbsp;objects that represents all
	 *       the folders currently hidden from this tab.</p>
	 * @returns {Item[]}
	 */

	hidden_dirs;
	/**
	 * <p>Returns a collection of   {@link Item}&nbsp;objects that represents all
	 *       the files currently hidden from this tab</p>
	 * @returns {Item[]}
	 */

	hidden_files;
	/**
	 * <p>Returns the current assigned tab label. Note that this may be an empty
	 *       string if no custom label has been assigned. The
	 *       <strong>displayed_label</strong> property returns the currently displayed
	 *       label in all cases.</p>
	 * @returns {string}
	 */

	label;
	/**
	 * <p>If this tab is linked to another tab, returns a  <strong>Tab</strong>&nbsp;object
	 *       representing the linked tab. If this tab is not linked this property
	 *       returns <strong>0</strong>.</p>
	 * @returns {Tab}
	 */

	linktab;
	/**
	 * <p>Returns a {@link Lister}&nbsp;object
	 *       representing the parent Lister that owns this tab.</p>
	 * @returns {Lister}
	 */

	lister;
	/**
	 * <p>Returns the current lock state of the tab; one of "off", "on",
	 *       "changes", "reuse".</p>
	 * @returns {string}
	 */

	lock;
	/**
	 * <p>Returns <strong>True</strong> if this tab is linked in Navigation Lock
	 *       mode. This property does not exist if the tab is not linked, so make sure
	 *       you check the value of <strong>linktab</strong> first.</p>
	 * @returns {boolean}
	 */

	navlock;
	/**
	 * <p>Returns the current path shown in this tab.</p>
	 * @returns {Path}
	 */

	path;
	/**
	 * <p>Returns a  {@link QuickFilter}&nbsp;object
	 *       providing information about the state of the quick filter in this
	 *     tab.</p>
	 * @returns {QuickFilter}
	 */

	quickfilter;
	/**
	 * <p>Returns <strong>True</strong> if this tab is currently on the right or
	 *       bottom side of a dual-display Lister, and <strong>False</strong>
	 *       otherwise.</p>
	 * @returns {boolean}
	 */

	right;
	/**
	 * <p>Returns a collection of  {@link Item}&nbsp;objects that represents all
	 *       the selected&nbsp;files and folders currently displayed in this tab. Note
	 *       that if <a href="../Checkbox_Mode.htm">checkbox mode</a> is turned on in
	 *       the tab, this will be a collection of checked items rather than
	 *       selected.</p>
	 * @returns {Item[]}
	 */

	selected;
	/**
	 * <p>Returns a collection of   {@link Item}&nbsp;objects that represents all
	 *       the selected&nbsp;folders currently displayed in this tab.</p>
	 * @returns {Item[]}
	 */

	selected_dirs;
	/**
	 * <p>Returns a collection of   {@link Item}&nbsp;objects that represents all
	 *       the selected&nbsp;files currently displayed in this tab</p>
	 * @returns {Item[]}
	 */

	selected_files;
	/**
	 * <p>Returns a {@link TabStats}&nbsp;object that
	 *       provides various information about the tab, including the number of files,
	 *       number of selected files, total size of selected files, etc. The
	 *       "selected" counts provided by this object take <a href="../Checkbox_Mode.htm">checkbox mode</a> into account (that is, if
	 *       checkbox mode is currently turned on, the counts will be for checked files
	 *       rather than for selected files).</p>
	 * @returns {TabStats}
	 */

	selstats;
	/**
	 * <p>Returns <strong>True </strong>if this tab is currently the <a href="../Source_and_Destination.htm">source</a>, and
	 *       <strong>False</strong> otherwise.</p>
	 * @returns {boolean}
	 */

	source;
	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link TabStats}&nbsp;object that
	 *       provides various information about the tab, including the number of files,
	 *       number of selected files, total size of selected files, etc. Unlike
	 *       <strong>selstats</strong>, this object does not take  <a href="../Checkbox_Mode.htm">checkbox mode</a> into account (so the
	 *       "selected" counts will refer to selected rather than checked
	 *   files).</p>
	 * @returns {TabStats}
	 */

	stats;
	/**
	 * <p>This <!--?xml:namespace prefix = "c1" /-->{@link Vars}&nbsp;object represents all
	 *       defined variables with&nbsp;<em>tab scope </em>(that are scoped to this
	 *       tab).</p>
	 * @returns {Vars}
	 */

	vars;
	/**
	 * <p>Returns <strong>True</strong> if this tab is currently visible (i.e. it
	 *       is the active tab in either file display), and <strong>False</strong>
	 *       otherwise.</p>
	 * @returns {boolean}
	 */

	visible;
	/**
	 * <p>Creates a new {@link Dialog} object,
	 *       that lets you display dialogs and popup menus. The dialog's
	 *       <strong>window</strong> property will be automatically assigned to this
	 *       tab.</p>
	 * @returns {Dialog}
	 */
	Dlg(){}
	/**
	 * <p>Returns an {@link Item} object
	 *       representing the file or folder which has focus in the tab.</p>
	 *       <p>The focus item is typically indicated by an outline around its name,
	 *       and is usually the last item which was clicked on, or the last item which
	 *       was moved to with the keyboard. The focus item is often also selected, but
	 *       not always; focus and selection are two different things.</p>
	 *       <p>If no focus item exists, or if the focus item is a special file or
	 *       folder, such as <em>This PC</em>, which cannot be represented by an
	 *       <strong>Item</strong> object, then this method does not return an object.
	 *       (In JScript, test if the result <em><strong>== null</strong></em> and in
	 *       VBScript test if the result <em><strong>is nothing</strong></em>.)</p>
	 * @returns {Item}
	 */
	GetFocusItem(){}
	/**
	 * <p>When a script accesses particular properties of a <strong>Tab</strong>
	 *       object, a snapshot is taken of the tab's state. For example, if you ask
	 *       for the <strong>selected_files</strong> property, the list of selected
	 *       files is calculated and then stored in memory. This can speed things up,
	 *       and also means you don't have to worry about the list changing under you
	 *       as you work through it. If the script then makes changes to the tab (e.g.
	 *       it selects files, creates a new folder, etc.), these changes will not be
	 *       reflected by the cached snapshot(s) if you access the same properties on
	 *       the same tab object again. To clear the cached snapshots and
	 *       re-synchronize the object with the tab's current state, call the
	 *       <strong>Tab.Update</strong> method.</p>
	 *
	 */
	Update(){}
} //end class
