function Table(layout) {
    const setPreviousColumnSpan = (rowElement, columnIndex) => {
        const existElementNumber = rowElement.children.length;
        console.log('1. rowElement.children: ', rowElement.children);
        const lastElement = rowElement.children[existElementNumber - 1];

        lastElement.colSpan = columnIndex + 1 - existElementNumber + 1;
    }

    const createTable = () => {
        const tableElement = document.createElement('table');

        for (let i = 0; i < layout.length; i++) {
            const row = layout[i];
            const rowElement = document.createElement('tr');
            tableElement.append(rowElement);

            for (let j = 0; j < row.length; j++) {
                const column = row[j];
                const columnElement = document.createElement('td');

                if (!column) {
                    setPreviousColumnSpan(rowElement, j);
                } else {
                    columnElement.append(column);
                    rowElement.append(columnElement);
                }
            }
        }

        return tableElement;
    };

    return {
        render: (appendElement) => {
            const tableElement = createTable();

            appendElement.append(tableElement);
        }
    };
};

export default Table;