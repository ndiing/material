import fs from "fs";
import path from "path";

function read(file) {
    try {
        return fs.readFileSync(file, "utf8");
    } catch (error) {
        return null;
    }
}

function write(file, data) {
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(file, data);
}

function readFiles(parentPath = "./", blacklist = [], whitelist = [], result = {}) {
    const dirents = fs.readdirSync(parentPath, { withFileTypes: true });

    for (const dirent of dirents) {
        const currentPath = path.join(dirent.parentPath, dirent.name);

        if (blacklist.some((regexp) => regexp.test(currentPath))) {
            continue;
        }

        if (dirent.isDirectory()) {
            result = readFiles(currentPath, blacklist, whitelist, result);
            continue;
        }

        if (!whitelist.some((regexp) => regexp.test(currentPath))) {
            continue;
        }

        const file = currentPath;
        const data = read(file);
        const { root, dir, base, ext, name } = path.parse(file);

        if (!result[dir]) {
            result[dir] = [];
        }

        result[dir].push({ root, dir, base, ext, name, file, data });
    }

    return result;
}

function writeFiles() {
    const result = readFiles(
        "./",
        [
            /\.gitattributes/,
            /\.gitignore/,
            /\.prettierrc/,
            /babel\.config\.json/,
            /dev/,
            /index\.html/,
            /lit-localize\.json/,
            /node_modules/,
            /package-lock\.json/,
            /package\.json/,
            /postcss\.config\.js/,
            /README\.md/,
            /scripts/,
            // /src/,
            /TODO\.md/,
            /webpack\.config\.js/,
            /xliff/,
            /\.git/,
            /src\\demo/,
            /src\\generated/,
            /src\\index\.js/,
            /.*?\.scss/,
            /src\\material\\fonts/,
        ],
        [
            /.*/,
        ],
    );

    
const classNames=[
  'MdDatetimePickerElement',
  'VirtualScrollController',
  'OrientationObserver',
  'MdNavigationDrawer',
  'BreakpointObserver',
  'MdDatetimePicker',
  'MdNavigationRail',
  'RippleController',
  'MdDataTableCell',
  'MdInputDatetime',
  'MdNavigationBar',
  'MdDialogFooter',
  'MdDialogHeader',
  'MdInputSegment',
  'SchemeObserver',
  'MdListElement',
  'MdButtonGroup',
  'MdInputNumber',
  'MdRadioButton',
  'MdSheetFooter',
  'MdSheetHeader',
  'MdSplitButton',
  'MediaObserver',
  'MdCardFooter',
  'MdCardHeader',
  'MdDialogBody',
  'MdGridColumn',
  'MdIconButton',
  'MdLayoutItem',
  'QueryBuilder',
  'MdDataTable',
  'MdInputEnum',
  'MdSheetBody',
  'MdTextField',
  'MdCardBody',
  'MdCheckbox',
  'MdListItem',
  'MdPushMenu',
  'MdSnackbar',
  'MdTextarea',
  'MdElement',
  'MdTooltip',
  'TaskQueue',
  'MdButton',
  'MdDialog',
  'MdLayout',
  'MdSlider',
  'MdSwitch',
  'Snackbar',
  'MdBadge',
  'MdImage',
  'MdScrim',
  'MdSheet',
  'MdCard',
  'MdForm',
  'MdGrid',
  'MdIcon',
  'MdList',
  'MdTree',
  'Router',
  'MdFab',
  'Store'
]
const classNamesWithoutPrefix=[
  'DatetimePickerElement',
  'VirtualScrollController',
  'OrientationObserver',
  'NavigationDrawer',
  'BreakpointObserver',
  'DatetimePicker',
  'NavigationRail',
  'RippleController',
  'DataTableCell',
  'InputDatetime',
  'NavigationBar',
  'DialogFooter',
  'DialogHeader',
  'InputSegment',
  'SchemeObserver',
  'ListElement',
  'ButtonGroup',
  'InputNumber',
  'RadioButton',
  'SheetFooter',
  'SheetHeader',
  'SplitButton',
  'MediaObserver',
  'CardFooter',
  'CardHeader',
  'DialogBody',
  'GridColumn',
  'IconButton',
  'LayoutItem',
  'QueryBuilder',
  'DataTable',
  'InputEnum',
  'SheetBody',
  'TextField',
  'CardBody',
  'Checkbox',
  'ListItem',
  'PushMenu',
  'Snackbar',
  'Textarea',
  'Element',
  'Tooltip',
  'TaskQueue',
  'Button',
  'Dialog',
  'Layout',
  'Slider',
  'Switch',
  'Snackbar',
  'Badge',
  'Image',
  'Scrim',
  'Sheet',
  'Card',
  'Form',
  'Grid',
  'Icon',
  'List',
  'Tree',
  'Router',
  'Fab',
  'Store'
]
// console.log(classNames.map(name=>name.replace(/Md/,'')))

    let handlersLength=0
    for (const name in result) {
        const value = result[name];


        for (const { root, dir, base, ext, name, file, data } of value) {
            // console.log(file);

            const className=(data.match(/class (\w+)/)?.[1])
            if(!className){continue}

            const handlers=(data.match(new RegExp(`_handle(${classNamesWithoutPrefix.join('|')})\\w+`,'g')))
            if(!handlers?.length){continue}
            // console.log(handlers.length)
            handlersLength+=handlers.length

        }
    }

    console.log(handlersLength)
}

writeFiles();
