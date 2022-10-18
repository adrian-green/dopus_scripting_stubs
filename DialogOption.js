/**
 *This object is used in conjunction with the Dialog object. It lets you specify a checkbox option that is added to the dialog.
 */
class DialogOption {
	/**
	 * <p>Set this to the desired label of the checkbox.</p>
	 * @returns {string}
	 */

	label;
	/**
	 * <p>Set this to the desired initial state of the checkbox. When the
	 *       <strong>Dialog.Show</strong> method returns, you can read this property to
	 *       find out the state the user chose.</p>
	 * @returns {boolean}
	 */

	state;
} //end class
