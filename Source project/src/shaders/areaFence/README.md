## 点击处的围栏效果

包括顶点着色器(vertex shader)、片元着色器(fragement shader)

在AreaFence.js使用Threejs的`ShaderMaterial`

```javascript
import * as THREE from 'three'

import shaderFragment from '../../shaders/areaFence/fragment.glsl'
import shaderVertex from '../../shaders/areaFence/vertex.glsl'

export default function()
{
    const uniforms = {
        uTime: { value: null },
        uBorderAlpha: { value: null },
        uStrikeAlpha: { value: null }
    }

    const material = new THREE.ShaderMaterial({
        wireframe: false,
        transparent: true,
        side: THREE.DoubleSide,
        depthTest: true,
        depthWrite: false,
        uniforms,
        vertexShader: shaderVertex,
        fragmentShader: shaderFragment
    })

    return material
}
```
