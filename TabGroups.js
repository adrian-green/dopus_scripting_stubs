/**
 *This object provides access to and lets you modify the configured list of folder tab groups. It's obtained from the DOpus.tabgroups property.
 */
class TabGroups {
	/**
	 * <p>Adds a new folder to the list of tab groups. You can either provide a
	 *       {@link TabGroup}object (which has the
	 *       folder property set to <strong>True</strong>) or the name for the new
	 *       folder. If the operation succeeds a {@link TabGroup}object is returned which
	 *       represents the new folder. If the operation fails <strong>False</strong>
	 *       is returned.</p>
	 * @param {object|string} TabGroup_or_name
	 * @returns {TabGroup}
	 */
	AddChildFolder(TabGroup_or_name){}
	/**
	 * <p>Adds a new tab group to the list of tab groups. You can either provide
	 *       a  {@link TabGroup}object or the name for
	 *       the new group. If the operation succeeds a {@link TabGroup}object is returned which
	 *       represents the new tab group. If the operation fails
	 *       <strong>False</strong> is returned.</p>
	 * @param {object|string} TabGroup_or_name
	 * @returns {TabGroup}
	 */
	AddChildGroup(TabGroup_or_name){}
	/**
	 * <p>Deletes the child item (folder or tab group).</p>
	 * @param {TabGroup} group
	 *
	 */
	DeleteChild(group){}
	/**
	 * <p>Saves the tab group list and any changes you have made.</p>
	 *       <p>Note that this only saves changes made to the object it is called on,
	 *       and each use of <strong>DOpus.TabGroups</strong> creates a new,
	 *       independent object. Therefore, you should modify tab groups like this
	 *       (JScript):</p><pre>	var tabGroups = DOpus.TabGroups;
	 * 	var group = tabGroups.AddChildGroup("New Tab Group");
	 * 	if (!group)
	 * 		DOpus.Output("Group already exists");
	 * 	else {
	 * 		group.desc = "Example description";
	 * 		var tabs = group.tabs;
	 * 		tabs.AddTab("C:\\");
	 * 		tabGroups.Save();
	 * 	}</pre>
	 *       <p>And not like this:</p><pre>	// This will not work correctly.
	 * 	var group = DOpus.TabGroups.AddChildGroup("New Tab Group");
	 * 	if (!group)
	 * 		DOpus.Output("Group already exists");
	 * 	else {
	 * 		group.desc = "Example description";
	 * 		group.tabs.AddTab("C:\\");
	 * 		DOpus.TabGroups.Save();
	 * 	}</pre>
	 *       <p>The second example will not work because the last line creates a
	 *       second, unrelated snapshot of the current state, which is unaffected by
	 *       the unsaved changes to the first snapshot, and then saves the second
	 *       snapshot without making any changes to it.</p>
	 *
	 */
	Save(){}
	/**
	 * <p>Updates the <strong>TabGroups </strong>object to reflect any changes
	 *       made through the Preferences user interface.</p>
	 *
	 */
	Update(){}
} //end class
