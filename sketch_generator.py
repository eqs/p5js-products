# -*- coding: utf-8 -*-
import os
import datetime
import shutil
from jinja2 import Environment, FileSystemLoader

def generate_id(c):
    return chr(c + ord('a')) if c <= ord('z') - ord('a') else 'z' + f(c - (ord('z') - ord('a') + 1))

env = Environment(loader=FileSystemLoader('./template', encoding='utf8'))
tpl = env.get_template('index.tpl.html')

now = datetime.datetime.now()
date = now.strftime('%y%m%d')

today_sketch_list = list(filter(lambda x : date in x, os.listdir('.')))

param = {'id' : 'sketch_' + date + generate_id(len(today_sketch_list))}

os.mkdir(param['id'])
shutil.copy('./template/sketch.js', f'./{param["id"]}/{param["id"]}.js')

html = tpl.render(param).encode('utf-8')

with open(f'./{param["id"]}/index.html', 'wb') as f:
    f.write(html)
