/**
 *This object represents a folder tab group. It's accessed by enumerating the TabGroups object.
 */
class TabGroup {
	/**
	 * <p><strong>True</strong> if the <strong>Close existing folder tabs when
	 *       opening this group</strong>&nbsp;option is turned on for this group. Only
	 *       present when the <strong>folder</strong> property is
	 *       <strong>False</strong>.</p>
	 * @returns {boolean}
	 */

	closeexisting;
	/**
	 * <p>The description of this tab group, if any. Only present when the
	 *       <strong>folder</strong> property is <strong>False</strong>.</p>
	 * @returns {string}
	 */

	desc;
	/**
	 * <p><strong>True</strong> if the <strong>Define tabs on specific sides of a
	 *       dual-display Lister</strong> option is turned on for this group. Only
	 *       present when the <strong>folder</strong> property is
	 *       <strong>False</strong>.</p>
	 * @returns {boolean}
	 */

	dual;
	/**
	 * <p><strong>True</strong> if this object represents a folder within the tab
	 *       group list, <strong>False</strong> if it's an actual tab group.</p>
	 * @returns {boolean}
	 */

	folder;
	/**
	 * <p><strong>True</strong> if this tab group or folder should be hidden from
	 *       menus which list tab groups. The group will still always be visible in
	 *       Preferences.</p>
	 * @returns {boolean}
	 */

	hidden;
	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link TabGroupTabList}&nbsp;object
	 *       representing the tabs in this group that open in the left/top side of a
	 *       dual-display Lister. Only present when the <strong>folder</strong>
	 *       property is <strong>False </strong>and the <strong>dual</strong> property
	 *       is <strong>True</strong>.</p>
	 * @returns {TabGroupTabList}
	 */

	lefttabs;
	/**
	 * <p>The name of this group or folder.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link TabGroupTabList}&nbsp;object
	 *       representing the tabs in this group that open in the right/bottom side of
	 *       a dual-display Lister. Only present when the <strong>folder</strong>
	 *       property is <strong>False </strong>and the <strong>dual</strong> property
	 *       is <strong>True</strong>.</p>
	 * @returns {TabGroupTabList}
	 */

	righttabs;
	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link TabGroupTabList}&nbsp;object
	 *       representing the tabs in this group. Only present when both the
	 *       <strong>folder</strong> and <strong>dual</strong> properties&nbsp;are
	 *       <strong>False</strong>.</p>
	 * @returns {TabGroupTabList}
	 */

	tabs;
	/**
	 * <p>Adds a new sub-folder to this tab group folder. Only available when the
	 *       <strong>folder</strong> property is <strong>True</strong>.&nbsp;You can
	 *       either provide a  <strong>TabGroup
	 *       </strong>object (which itself has the folder property set to
	 *       <strong>True</strong>) or the name for the new folder. If the operation
	 *       succeeds a <strong>TabGroup </strong>object is returned which represents
	 *       the new folder. If the operation fails <strong>False</strong> is
	 *       returned.</p>
	 * @param {object|string} TabGroup_or_name
	 * @returns {TabGroup}
	 */
	AddChildFolder(TabGroup_or_name){}
	/**
	 * <p>Adds a new tab group to this tab group folder. Only available when the
	 *       <strong>folder</strong> property is <strong>True. </strong>You can either
	 *       provide a  <strong>TabGroup
	 *       </strong>object or the name for the new group. If the operation succeeds a
	 *       <strong>TabGroup </strong>object is returned which represents the new tab
	 *       group. If the operation fails <strong>False</strong> is
	 * returned.</p>
	 * @param {object|string} TabGroup_or_name
	 * @returns {TabGroup}
	 */
	AddChildGroup(TabGroup_or_name){}
	/**
	 * <p>Deletes the child item (folder or tab group).</p>
	 * @param {object} TabGroup
	 *
	 */
	DeleteChild(TabGroup){}
	/**
	 * <p>Returns a duplicate of this tab group or folder. When it's returned the
	 *       duplicate has not yet been&nbsp;added to a tab list.</p>
	 * @returns {TabGroup}
	 */
	Duplicate(){}
	/**
	 * <p>In a tab group that has specific left and right tabs specified, this
	 *       method links together a tab from the left side and a tab from the right
	 *       side. Only available if the <strong>dual</strong> property is set to
	 *       <strong>True</strong>. You can provide {@link TabGroupTabEntry}objects
	 *       or the index numbers of the tabs you want to link.<br><br>The optional
	 *       <em>type</em> parameter can be set to <strong>"slave"</strong> to specify
	 *       that the tabs should be slaved to each other.</p>
	 * @param {TabGroupTabEntry} entryleft
	 * @param {TabGroupTabEntry} entryright
	 * @param {string} type ie "slave"
	 *
	 */
	Link(entryleft, entryright, type){}
	/**
	 * <p>Unlinks the specified tab from its partner. Only available if the
	 *       <strong>dual</strong> property is set to <strong>True</strong>.
	 *   </p>
	 * @param {object} TabGroupTabEntry
	 *
	 */
	Unlink(TabGroupTabEntry){}
} //end class
