/**
 *This object is provided to the OnGetNewName method, which is one of the supported methods a rename script can provide.
 */
class GetNewNameData {
	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link CustomFieldData}&nbsp;object
	 *       which provides the values of any <a href="Custom_Fields_in_the_Rename_Dialog.htm">custom fields</a> your
	 *       script added to the <em>Rename </em>dialog.</p>
	 * @returns {CustomFieldData}
	 */

	custom;
	/**
	 * <p>Returns an {@link Item} object
	 *       representing the file or folder being renamed.</p>
	 * @returns {Item}
	 */

	item;
	/**
	 * <p>Returns the proposed new name of the item. This will be the result of
	 *       the application of any selected standard options in the <a href="../Advanced_Rename.htm">rename dialog</a> (numbering,
	 *       capitalization, etc).</p>
	 * @returns {string}
	 */

	newname;
	/**
	 * <p>Returns the file extension of the proposed new name. Does not take
	 *       multi-part extensions into account (e.g. will return ".rar" rather than
	 *       ".part1.rar").</p>
	 * @returns {string}
	 */

	newname_ext;
	/**
	 * <p>Returns the file extension of the proposed new name, taking multi-part
	 *       extensions into account (e.g. will return ".part1.rar" rather than
	 *       ".rar").</p>
	 * @returns {string}
	 */

	newname_ext_m;
	/**
	 * <p>Returns the contents of the <em>New Name</em> field (that is, not the
	 *       calculated new name after all the options have been applied, but the
	 *       actual text contents of the field as entered by the user).</p>
	 * @returns {string}
	 */

	newname_field;
	/**
	 * <p>Returns the file stem of the proposed new name. Does not take
	 *       multi-part extensions into account (e.g. will return "catpictures.part1"
	 *       rather than "catpictures").</p>
	 * @returns {string}
	 */

	newname_stem;
	/**
	 * <p>Returns the file stem of the proposed new name, taking multi-part
	 *       extensions into account (e.g. will return "catpictures" rather than
	 *       "catpictures.part1").</p>
	 * @returns {string}
	 */

	newname_stem_m;
	/**
	 * <p>Returns the "old name" pattern as entered by the user in the <a href="../Advanced_Rename.htm">rename dialog</a>.</p>
	 * @returns {string}
	 */

	oldname_field;
	/**
	 * <p>Returns <strong>True</strong> if the script is being called to generate
	 *       a preview for the rename dialog, <strong>False</strong> if the file is
	 *       being renamed for real.</p>
	 * @returns {boolean}
	 */

	preview;
} //end class
