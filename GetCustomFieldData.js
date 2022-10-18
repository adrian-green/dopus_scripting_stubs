/**
 *This object is provided to the OnGetCustomFields event, which lets a rename script add its own fields to the Rename dialog.
 */
class GetCustomFieldData {
	/**
	 * <p>Returns a  {@link CustomFieldData}&nbsp;object,
	 *       that the script can use to add custom fields to the <em>Rename</em>
	 *       dialog. Each property added to the object in this method will be create a
	 *       new field in the dialog, allowing the user to supply additional
	 *       information to your rename script.</p>
	 * @returns {CustomFieldData}
	 */

	fields;
	/**
	 * <p>This lets you assign labels to your script's custom fields, that are
	 *       shown to the user in the <em>Rename</em> dialog. To do this, set this
	 *       property to a&nbsp;{@link Map}&nbsp;created
	 *       via the <strong><a href="DOpusFactory.htm">DOpusFactory</a>.Map
	 *       </strong>method, filled with name/label string pairs.</p>
	 * @returns {Map}
	 */

	field_labels;
	/**
	 * <p>This lets you assign "cue banners" to any edit fields created by your
	 *       script. A cue banner is displayed inside an empty edit field to prompt the
	 *       user what sort of data the field expects. To use this, set this property
	 *       to a&nbsp; {@link Map}&nbsp;created via the <strong><!--?xml:namespace prefix = "c1" /--><a href="DOpusFactory.htm">DOpusFactory</a>.Map </strong>method, filled with
	 *       name/banner string pairs.</p>
	 * @returns {Map}
	 */

	field_tips;
	/**
	 * <p>You can use this field to specify which control gets the input focus by
	 *       default when your fields appear for the first time. Set it to the name of
	 *       the desired control. You can also specify <strong>!oldname</strong> or
	 *       <strong>!newname</strong> to assign focus to the standard old and new name
	 *       fields.</p>
	 * @returns {string}
	 */

	focus;
} //end class
