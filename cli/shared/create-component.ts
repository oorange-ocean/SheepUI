import {ensureDirSync,writeFileSync} from 'fs-extra';
import { lightBlue, lightGreen } from 'kolorist';
import {resolve} from 'path'; 
import { WriteFileOptions } from 'fs'
import genCoreTemplate from '../template/core'
import genTypesTemplate from '../template/types'
import { genStyleTemplate } from '../template/style'
import genTestTemplate from '../template/test'
import genIndexTemplate from '../template';


export interface ComponentMeta{
    name:string;
    title:string;
    catagory:string;
}
const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' }
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
    //创建成功通知,绿色
    console.log(lightGreen(`✓${name}目录创建成功`));
    console.log(lightBlue(`✓组件目录：${componentDir}`));

    // 文件和内容创建
  // 核心文件：组件文件
  const coreFilePath = resolve(sourceDir, name + '.tsx')
  writeFileSync(coreFilePath, genCoreTemplate(name), WRITE_FILE_OPTIONS)

  // 核心文件：组件类型文件
  const typesFilePath = resolve(sourceDir, name + '-type.ts')
  writeFileSync(typesFilePath, genTypesTemplate(name), WRITE_FILE_OPTIONS)
  // 核心文件：组件样式文件
  // 样式文件
  const styleFilePath = styleDir + `/${name}.scss`
  writeFileSync(styleFilePath, genStyleTemplate(name), WRITE_FILE_OPTIONS)

  // 核心文件：测试文件
  const testFilePath = testDir + `/${name}.test.ts`
  writeFileSync(testFilePath, genTestTemplate(name), WRITE_FILE_OPTIONS)

  // 组件索引文件
  const indexFilePath = componentDir + `/index.ts`
  writeFileSync(indexFilePath, genIndexTemplate(name), WRITE_FILE_OPTIONS)

    
}
