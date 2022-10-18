/**
 *This object represents the arguments supplied on the command line for script-defined internal commands. It is retrieved from the ScriptCommandData.Func.args property.
 */
class Args {
	/**
	 * <p>The <strong>Args</strong> object will have one property corresponding
	 *       to each of the arguments in the command line template.<br><br>For example,
	 *       if the command line template is <strong>NAME/K,SIZE/N</strong>, the
	 *       <strong>Args</strong> object would have two properties, called
	 *       <strong>name</strong> and <strong>size</strong>.</p>
	 *       <p><br>The type returned by each property is also defined by the template.
	 *       In the above example, <strong>name</strong> would return a <em>string</em>
	 *       and <strong>size</strong> an <em>int</em>.<br>&nbsp;</p>
	 *       <p>A <strong>/S</strong> argument returns a <em>bool</em>, a
	 *       <strong>/N</strong> argument returns an <em>int</em>, and all other
	 *       argument types&nbsp;return a <em>string</em>. Note that a
	 *       <strong>/O</strong> argument will also return a <em>bool</em> if no
	 *       string&nbsp;value is provided on the command line.<br>&nbsp;</p>
	 *       <p>If an argument is marked in the template as <strong>/M</strong>
	 *       (multiple) then it returns a {@link Vector} containing elements of the
	 *       appropriate type.<br><br>If an argument was not provided on the command
	 *       line by the user, its property will either return <em>bool</em> (for a
	 *       <strong>/S</strong> or <strong>/O</strong> argument), or an empty variant
	 *       otherwise.</p>
	 * @returns {any}
	 */
	_argument_name;
	/**
	 * <p>The <strong>got_arg</strong> property returns an object with a
	 *       <em>bool</em> child property for each argument in the template. It lets
	 *       you test if a particular argument was provided on the command line, before
	 *       you actually query for the value of the argument. For example,
	 *       <strong><em>If Args.got_arg.size
	 * Then...</em></strong></p>
	 * @returns {object}
	 */

	got_arg;
} //end class
