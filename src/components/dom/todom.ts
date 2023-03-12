/**
 * Transform a string into HTML elements
 * @param html
 */
export default (html :string) :NodeListOf<ChildNode> => {
	const template = document.createElement('template');
	template.innerHTML = html.trim();
	return template.content.childNodes;
}
