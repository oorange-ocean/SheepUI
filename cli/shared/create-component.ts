import {ensureDirSync} from 'fs-extra';
import {resolve} from 'path'; 

export interface ComponentMeta{
    name:string;
    title:string;
    catagory:string;
}
export default function createComponent(meta:ComponentMeta){
    const {name} = meta;
    //拼接组件目录
    const componentDir = resolve('../src',name)
    //组件源文件目录，类型，样式、测试
    const sourceDir = resolve(componentDir,'src');
    const styleDir = resolve(componentDir,'styles');
    const testDir = resolve(componentDir,'tests');
    //创建目录
    ensureDirSync(sourceDir);
    ensureDirSync(styleDir);
    ensureDirSync(testDir);
}
