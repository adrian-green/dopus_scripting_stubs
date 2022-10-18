/**
 *This object is provided to the OnGetHelpContent event, which lets a script add its own content to the Opus F1 help.
 */
class GetHelpContentData {
	/**
	 * <p>Adds a PNG or JPG image and makes it available for your help pages. You
	 *       can use any name you like for your images, although they must have either
	 *       a <strong>.png</strong> or a <strong>.jpg</strong> suffix. Your help
	 *       content can then refer to images by name, e.g. if you add an image and
	 *       call it <strong>myimage.jpg</strong>, your html content could show it
	 *       using:<br></p><pre>&lt;img src="myimage.jpg"&gt;<br> </pre>
	 *       <p>If your script is bundled as&nbsp;a <a href="Script_Package.htm">script
	 *       package</a> you can include image files in a sub-directory of the package
	 *       called <strong>help</strong>, and then load them easily using the
	 *       <strong><a href="Script.htm">Script</a>.LoadHelpImage</strong>
	 *     method.</p>
	 * @param {string} name
	 * @param {Blob} image
	 *
	 */
	AddHelpImage(name, image){}
	/**
	 * <p>Adds a page of help content for your script to the F1 help file. You
	 *       can call this method as many times as you like. If you add more than one
	 *       page of help the first page will become the topic header and all
	 *       subsequent pages will appear underneath it in the index.<br>&nbsp;</p>
	 *       <p>The <strong>name</strong> parameter is optional; if not supplied, a
	 *       default name will be assigned automatically to each page you add.&nbsp;You
	 *       can use the <!--?xml:namespace prefix = "c1" /-->{@link Script}<strong>.ShowHelp
	 *       </strong>method to trigger the display of a specific page of your help by
	 *       name.<br>&nbsp;</p>
	 *       <p>The <strong>title</strong> parameter specifies the page title; this is
	 *       shown in the help index and should be descriptive enough that the user can
	 *       recognise it as referring to your script. The body parameter specifies the
	 *       actual HTML content for the help page. This should be everything you would
	 *       normally find <em>between</em> the
	 *       <strong>&lt;body&gt;...&lt;/body&gt;</strong> tags of an HTML
	 *       page.<br>&nbsp;</p>
	 *       <p>If your script is bundled as&nbsp;a  <a href="Script_Package.htm">script package</a> you can include HTML files in
	 *       a sub-directory of the package called <strong>help</strong>, and then load
	 *       them easily using the <strong><!--?xml:namespace prefix = "c1" /--><a href="Script.htm">Script</a>.LoadHelpFile</strong>
	 *   method.</p>
	 * @param {string} name
	 * @param {string} title
	 * @param {string} body
	 *
	 */
	AddHelpPage(name, title, body){}
} //end class
