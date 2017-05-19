precision highp float;
varying vec2 vTextureCoord;
varying vec2 vScreenUV;
uniform sampler2D texture;
uniform sampler2D colorMap;


vec3 blendOverlay(vec3 base, vec3 blend) {
    return mix(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, step(base, vec3(0.5)));
}

void main(void) {
    vec4 color = texture2D(texture, vTextureCoord);
    vec3 colorMap = texture2D(colorMap, vScreenUV).rgb;
	color.rgb = blendOverlay(color.rgb, colorMap);

    gl_FragColor = color;
}