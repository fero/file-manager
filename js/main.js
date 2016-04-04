$(function() {
    $('body').layout({
        applyDefaultStyles: false
        , spacing_open: 7
        , west: {
            closable: false,
            size: 300
        }
    })

    var treeView = $('#tree-view')
    treeView
        .tree({
            closedIcon: $('<i>').addClass('fa fa-caret-right tree-expander'),
            openedIcon: $('<i>').addClass('fa fa-caret-down tree-expander'),
            dataUrl: '/treedata.json',
            onCreateLi: function (node, li) {
                li.find('[role="treeitem"]:first').prepend(
                    $('<i>')
                        .addClass(node.isDir ? "fa fa-folder tree-icon" : "fa fa fa fa-file-code-o tree-icon")
                        .addClass(node.hasRunOption ? "blue" : "")
                )
            }
        })
        .on('tree.click', function(event) {
            if (event.node.is_open) {
                treeView.tree('closeNode', event.node)
            } else {
                treeView.tree('openNode', event.node)
            }
            
            return !event.node.isDir
        })
        .on('tree.open', function(event) {
            var nodeIcon = $(event.node.element).find(' > .jqtree-element > .jqtree-title > .tree-icon')

            if (nodeIcon.hasClass('fa-folder')) {
                nodeIcon.removeClass('fa-folder').addClass('fa-folder-open')
            }
        })
        .on('tree.close', function(event) {
            var nodeIcon = $(event.node.element).find(' > .jqtree-element > .jqtree-title > .tree-icon')

            if (nodeIcon.hasClass('fa-folder-open')) {
                nodeIcon.removeClass('fa-folder-open').addClass('fa-folder')
            }
        })
}())