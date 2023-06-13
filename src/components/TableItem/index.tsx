import * as C from './style';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props ) => {
    return (
        <C.TableLine>
            <C.tableColumn>{formatDate(item.date)}</C.tableColumn>
            <C.tableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.tableColumn>
            <C.tableColumn>{item.title}</C.tableColumn>
            <C.tableColumn>
                <C.Value color={categories[item.category].expense ? 'red    ' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.tableColumn>
        </C.TableLine>
    );
}