# -*- coding: utf-8 -*-
"""
Created on 05/04/18 00:01:49

plot

@author: Satoshi Murashige
"""

import sys
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 5, 10000)

a = (3**(-1/2) - 3**(-3/2))
f = (np.exp(-x) - np.exp(-3*x)) / a

plt.xlim(0, 5)
plt.ylim(0, 1.5)

plt.plot(x, f, label='$f(x) = \\frac{e^{-x} - e^{-3x}}{3^{-1/2} - 3^{-3/2}}$')
plt.legend(loc='best', fontsize=16)

plt.show()

