- 点击处的围栏效果
包括顶点着色器(vertex shader)、片元着色器(fragement shader)

在使用Threejs的`ShaderMaterial`

```javacsript
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
```
