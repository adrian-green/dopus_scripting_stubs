/**
 *The ShellProperty object represents a shell property - an item of metadata for a file or folder that comes from Windows or third-party extensions. The FSUtil.GetShellPropertyList method lets you retrieve a list of available shell properties.
 */
class ShellProperty {
	/**
	 * <p>The default width in pixels a column displaying this property should
	 *       use.</p>
	 * @returns {int}
	 */

	defwidth;
	/**
	 * <p>The display name of this property (the name that should be shown to
	 *       users).</p>
	 * @returns {string}
	 */

	display_name;
	/**
	 * <p>The default column justification for this property
	 *       (<strong>left</strong>, <strong>right</strong>,
	 *       <strong>center</strong>).</p>
	 * @returns {string}
	 */

	justify;
	/**
	 * <p>The PKEY (property key) for this property. This is a property's unique
	 *       ID and the canonical way to refer to a property. You can use the
	 *       <strong>raw_name </strong>and <strong>display_name </strong>values to
	 *       access properties as well, but they are potentially inaccurate (since it's
	 *       possible to have two properties with the same name) and also slower as the
	 *       property has to be looked up by name each time.</p>
	 * @returns {string}
	 */

	pkey;
	/**
	 * <p>An internal name used by the property provider.</p>
	 * @returns {string}
	 */

	raw_name;
	/**
	 * <p>The type of data this property returns; <strong>string</strong>,
	 *       <strong>number</strong>, <strong>datetime</strong> are the only supported
	 *       types currently.</p>
	 * @returns {string}
	 */

	type;
} //end class
