// basic.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uHeightMap;

varying vec2 vTextureCoord;
varying vec3 vNormal;

void main(void) {
    vec3 pos = aVertexPosition;
    float h = texture2D(uHeightMap, aTextureCoord).r;
    pos.y = h;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;
}