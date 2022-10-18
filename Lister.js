/**
 *This object represents a Lister window.
 */
class Lister {
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Tab}object representing the currently
	 *       active (source) tab.</p>
	 * @returns {Tab}
	 */

	activetab;
	/**
	 * <p>Lister window bottom-edge coordinate.</p>
	 * @returns {int}
	 */

	bottom;
	/**
	 * <p>Returns the custom title of the Lister (if any) as set by the
	 *       <strong>Set LISTERTITLE</strong> command. This may be an empty string. The
	 *       <em>title </em>property returns the actual window title.</p>
	 * @returns {string}
	 */

	custom_title;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Tab}object representing the current
	 *       destination tab (in a dual-display Lister).</p>
	 * @returns {Tab}
	 */

	desttab;
	/**
	 * <p>Indicates whether the Lister is in <a href="../Dual_Display.htm">dual-display mode</a> or not. Possible values
	 *       are:<br>0 - single-display mode<br>1 - dual-display, vertical layout<br>2
	 *       - dual-display, horizontal layout</p>
	 * @returns {int}
	 */

	dual;
	/**
	 * <p>Returns the current split percentage of the dual displays (e.g.
	 *       <strong>50 </strong>indicates they are evenly sized).</p>
	 * @returns {int}
	 */

	dualsize;
	/**
	 * <p>Returns <strong>True</strong> if this Lister is currently the
	 *       foreground (active) window.</p>
	 * @returns {boolean}
	 */

	foreground;
	/**
	 * <p>Returns <strong>True</strong> if this Lister is currently the active
	 *       Lister (foreground window), or was the most recently active
	 *   Lister.</p>
	 * @returns {boolean}
	 */

	lastactive;
	/**
	 * <p>Provides the name of the <a href="../Layouts1.htm">Lister layout</a>
	 *       that this Lister came from (if any).</p>
	 * @returns {string}
	 */

	layout;
	/**
	 * <p>Lister window left-edge coordinate.</p>
	 * @returns {int}
	 */

	left;
	/**
	 * <p>Indicates whether the <a href="../Metadata_Pane.htm">metadata pane</a>
	 *       is currently open or not. Possible values are:<br>0 - metadata pane is not
	 *       open<br>1 - metadata pane is open, vertical layout<br>2 - metadata pane is
	 *       open, horizontal layout</p>
	 * @returns {int}
	 */

	metapane;
	/**
	 * <p>Lister window right-edge coordinate.</p>
	 * @returns {int}
	 */

	right;
	/**
	 * <p>Returns the state of a single-display mode Lister:<br>0 - off<br>1 -
	 *       source<br>2 - destination<br>4 - locked</p>
	 * @returns {string}
	 */

	state;
	/**
	 * <p>Returns the name of the <a href="../Styles.htm">Lister style</a> which
	 *       was last applied to the Lister, or an empty string if there is none. This
	 *       is just the last style which was loaded and does not mean the Lister still
	 *       looks the same; the user may have opened or closed panels and made other
	 *       changes via other methods in the time since the style was
	 *   applied.</p>
	 * @returns {string}
	 */

	style;
	/**
	 * <p>Returns a collection of  <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Tab}objects that represent all tabs in
	 *       this Lister. In a dual-display Lister this includes tabs in both the left
	 *       and right file displays.</p>
	 * @returns {Tab[]}
	 */

	tabs;
	/**
	 * <p>Returns the name of the Folder Tab Group which was last loaded into the
	 *       left half of the Lister, or an empty string if no group has been
	 *       loaded.</p>
	 *       <p>The name only changes when a Folder Tab Group is loaded. The current
	 *       tabs may no longer resemble the named tab group if the user has made
	 *       changes since the group was loaded. The name persists across restarts,
	 *       through the Default Lister and saved Layouts.</p>
	 * @returns {string}
	 */

	tabgroupleft;
	/**
	 * <p>Similar to <b>tabgroupleft</b>, above, but for the right half of the
	 *       Lister (if any).</p>
	 * @returns {string}
	 */

	tabgroupright;
	/**
	 * <p>Returns a collection of  <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Tab}objects that represent the tabs in
	 *       the left/top side of a dual-display Lister. In a single-display Lister
	 *       this is equivalent to all the tabs in the Lister.</p>
	 * @returns {Tab[]}
	 */

	tabsleft;
	/**
	 * <p>Returns a collection of  <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Tab}objects that represent the tabs in
	 *       the right/bottom side of a dual-display Lister. In a single-display Lister
	 *       this will return an empty collection.</p>
	 * @returns {Tab[]}
	 */

	tabsright;
	/**
	 * <p>Returns the current title of the Lister window.</p>
	 * @returns {string}
	 */

	title;
	/**
	 * <p>Returns a collection of  {@link Toolbar}&nbsp;objects
	 *       representing all currently open toolbars in this Lister.</p>
	 * @returns {Toolbar[]}
	 */

	toolbars;
	/**
	 * <p>Lister window top-edge coordinate;</p>
	 * @returns {int}
	 */

	top;
	/**
	 * <p>Indicates whether or not the <a href="../Folder_Tree.htm">folder
	 *       tree</a> is currently open. Possible values are:<br>0 - folder tree is not
	 *       open<br>1 - a single tree is open, at the left of the Lister<br>2 - a
	 *       single tree is open, at the right of the Lister<br>3 - two folder trees
	 *       are open (in a dual-display Lister)</p>
	 * @returns {int}
	 */

	tree;
	/**
	 * <p>If the <!--?xml:namespace prefix = "c1" /--><a href="../Utility_Panel.htm">utility panel</a> is currently open, returns a
	 *       string indicating the currently selected utility&nbsp;page. Possible
	 *       values are <strong>find</strong> (which means the Find panel's Simple
	 *       version), <strong>findadvanced</strong>, <strong>sync</strong>,
	 *       <strong>dupe</strong>, <strong>undo</strong>, <strong>filelog</strong>,
	 *       <strong>ftplog</strong>, <strong>otherlog</strong>,
	 *       <strong>email</strong>.</p>
	 * @returns {string}
	 */

	utilpage;
	/**
	 * <p>Indicates whether or not the <a href="../Utility_Panel.htm">utility
	 *       panel</a> is currently open. Possible values are:<br>0 - utility panel is
	 *       not open<br>1 - utility panel is open</p>
	 * @returns {int}
	 */

	utilpane;
	/**
	 * <p>This <!--?xml:namespace prefix = "c1" /-->{@link Vars}&nbsp;object represents all
	 *       defined variables with&nbsp;<em>Lister scope </em>(that are scoped to this
	 *       Lister).</p>
	 * @returns {Vars}
	 */

	vars;
	/**
	 * <p>Indicates whether or not the <a href="../Viewer_Pane.htm">viewer
	 *       pane</a> is currently open. Possible values are:<br>0 - viewer pane is not
	 *       open<br>1 - viewer pane is open, vertical layout<br>2 - viewer pane is
	 *       open, horizontal layout</p>
	 * @returns {int}
	 */

	viewpane;
	/**
	 * <p>Creates a new {@link Dialog} object,
	 *       that lets you display dialogs and popup menus. The dialog's
	 *       <strong>window</strong> property will be automatically assigned to this
	 *       Lister.</p>
	 * @returns {Dialog}
	 */
	Dlg(){}
	/**
	 * <p>Used to change how the lister window is grouped with other Opus windows
	 *       on the taskbar. Specify a group name to move the window into an
	 *       alternative group, or omit the group argument to reset back to the default
	 *       group. If one or more windows are moved into the same group, they will be
	 *       grouped together, separate from other the default group.</p>
	 *       <p>This only works on Windows 7 and above, and only when taskbar grouping
	 *       is enabled. Group names are limited to 103 characters and will be
	 *       truncated if longer. Spaces and dots in group names are automatically
	 *       converted to underscores.</p>
	 *       <p>Returns true on success.</p>
	 * @param {string} group
	 * @returns {boolean}
	 */
	SetTaskbarGroup(group){}
	/**
	 * <p>The first time a script accesses a particular <strong>Lister</strong>
	 *       object, a snapshot is taken of the Lister state. If the script then makes
	 *       changes to that Lister (e.g. it opens a new tab, or moves the window),
	 *       these changes will not be reflected by the object. To re-synchronize the
	 *       object with the Lister, call the <strong>Lister.Update</strong>
	 *     method.</p>
	 *
	 */
	Update(){}
} //end class
