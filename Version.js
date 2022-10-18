/**
 *This object represents information about the current Opus version. It is obtained from the DOpus.Version property.
 */
class Version {
	/**
	 * <p>Full version string (as shown in the <em>About</em> dialog).</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>The current build number.</p>
	 * @returns {int}
	 */

	build;
	/**
	 * <p>The current module version (the version of <strong>dopus.exe</strong>
	 *       itself). You can also enumerate or index this as a <em>collection:int</em>
	 *       to retrieve the individual four digits of the module version.</p>
	 * @returns {string}
	 */

	module;
	/**
	 * <p>The current product version (the release version of Directory Opus as a
	 *       whole). You can also enumerate or index this as a <em>collection:int</em>
	 *       to retrieve the individual four digits of the&nbsp;product
	 *   version.</p>
	 * @returns {string}
	 */

	product;
	/**
	 * <p>Returns a <strong><a href="WinVer.htm">WinVer</a> </strong>object which
	 *       provides information about the current version of
	 *   Windows.</p>
	 * @returns {WinVer}
	 */

	winver;

	/**
	 * <p>Returns <strong>True</strong> if the current version of Opus is the
	 *       specified version or greater. You can specify the major version only (e.g.
	 *       <em>"11"</em>), a major and minor version (e.g. <em>"11.3"</em>) or a
	 *       specific beta version (e.g. <em>"11.3.1"</em>).</p>
	 * @param {string} version
	 * @returns {boolean}
	 */
	AtLeast(version) {
	}
} //end class
