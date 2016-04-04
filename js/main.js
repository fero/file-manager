;$(function() {
    "use strict";

    $('#view-page').layout({
        applyDefaultStyles: false
        , spacing_open: 6
        , west: {
            closable: false,
            size: 300
        }
    });

    var editor = CodeMirror.fromTextArea($(".file-preview")[0], {
        lineNumbers: true
        , readOnly: true
        , styleActiveLine: false
        , matchBrackets: true
        , theme: 'neat'
        , smartIndent: true
        , indentWithTabs: true
        , keyMap: 'sublime'
        , mode: "text/x-php"
        , scrollbarStyle: "simple"
    });

    // editor.setSize("100%", 700)
    console.log(editor)

    var treeView = $('#tree-view')
        , previewPane = $('#preview-pane');

    treeView
        .tree({
            closedIcon: $('<i>').addClass('fa fa-caret-right tree-expander'),
            openedIcon: $('<i>').addClass('fa fa-caret-down tree-expander'),
            dataUrl: './treedata.json',
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
                treeView.tree('closeNode', event.node);
            } else {
                treeView.tree('openNode', event.node);
            }

            previewPane.find(' > .top').trigger('nav:select', [event.node])

            return !event.node.isDir;
        })
        .on('tree.open', function(event) {
            var nodeIcon = $(event.node.element).find(' > .jqtree-element > .jqtree-title > .tree-icon');

            if (nodeIcon.hasClass('fa-folder')) {
                nodeIcon.removeClass('fa-folder').addClass('fa-folder-open');
            }
        })
        .on('tree.close', function(event) {
            var nodeIcon = $(event.node.element).find(' > .jqtree-element > .jqtree-title > .tree-icon');

            if (nodeIcon.hasClass('fa-folder-open')) {
                nodeIcon.removeClass('fa-folder-open').addClass('fa-folder');
            }
        })
        .on('mouseenter', '.jqtree-element', function(event) {
            treeView.find('.jqtree-element').removeClass('hovered');

            var row = $(event.target);
            row.addClass('hovered');
        })
        .on('mouseleave', '.jqtree-element', function(event) {
            var row = $(event.target);
            row.removeClass('hovered');
        })

        previewPane.find(' > .top')
            .on('nav:select', function (event, node) {
                var $this = $(this)
                    , pathPlaceholder = $this.find('.path');

                pathPlaceholder
                    .empty()
                    .append(node.path);
            })
}())