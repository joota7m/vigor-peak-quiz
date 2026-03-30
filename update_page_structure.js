const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// 1. Delete page2. We find `<!-- PAGE 2:` and cut until `    <script>`
const page2Start = html.indexOf('<!-- PAGE 2:');
const scriptStart = html.indexOf('<script>', page2Start);
if (page2Start !== -1 && scriptStart !== -1) {
    html = html.substring(0, page2Start) + html.substring(scriptStart);
}

// 2 & 3. Change button destinations and text.
// Replace onclick="handleVSLClick();" with onclick="checkout();"
// Replace VER DETALLES DEL PROTOCOLO and VER LO QUE VAS A RECIBIR with QUIERO CURAR MI IMPOTENCIA
html = html.replace(/onclick="handleVSLClick\(\);"/g, 'onclick="checkout();"');
html = html.replace(/>VER DETALLES DEL PROTOCOLO</g, '>QUIERO CURAR MI IMPOTENCIA<');
html = html.replace(/>VER LO QUE VAS A RECIBIR</g, '>QUIERO CURAR MI IMPOTENCIA<');

// Remove goToPage1 and goToPage2 functions from JS
html = html.replace(/function goToPage2\(\) \{[\s\S]*?\}\s*function goToPage1\(\) \{[\s\S]*?\}/, '');

// 4. Add the product section BELOW the VSL (before comments).
const productSectionHTML = `
            <!-- PRODUCT SECTION -->
            <div class="locked-btn" style="background: #f9f9f9; border: 1px solid #eee; border-radius: 8px; padding: 24px 16px; margin: 32px 0;">
                
                <h2 style="font-size: 22px; font-weight: 900; color: #000; text-align: center; margin-bottom: 8px; line-height: 1.2;">
                    El ingrediente secreto que los laboratorios nunca quisieron que descubrieras
                </h2>
                <h3 style="font-size: 14px; font-weight: 500; color: #555; text-align: center; margin-bottom: 24px; line-height: 1.5;">
                    Una sal natural descubierta fuera del sistema médico que reactiva tu erección de forma silenciosa y poderosa
                </h3>

                <!-- Product Image Placeholder -->
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="/assets/product.png" alt="Produto Oficial" style="max-width: 100%; height: auto; max-height: 280px; object-fit: contain;">
                </div>

                <!-- Price Box -->
                <div style="background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%); padding: 18px 14px; border-radius: 7px; margin-bottom: 24px; text-align: center; box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);">
                    <div style="font-size: 14px; color: #333; font-weight: 600; margin-bottom: 4px; text-decoration: line-through;">Precio Original: $139</div>
                    <div style="display: flex; justify-content: center; align-items: baseline; gap: 8px;">
                        <span style="font-size: 38px; font-weight: 900; color: #000; letter-spacing: -1px;">$49</span>
                        <span style="font-size: 14px; color: #333; font-weight: 700;">/ por frasco</span>
                    </div>
                    <div style="font-size: 13px; color: #c62120; margin-top: 6px; font-weight: 800; background: #fff; display: inline-block; padding: 4px 10px; border-radius: 20px;">¡Ahorras $780! (pack 6)</div>
                    <div style="font-size: 13px; color: #000; margin-top: 8px; font-weight: 800;">🚚 Envío Gratis Hoy</div>
                </div>

                <!-- Benefits Bullets -->
                <div style="background: #fff; padding: 16px; border-radius: 7px; margin-bottom: 24px; border: 1px solid #eee;">
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="font-size: 13px; color: #444; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> Reactiva la circulación exactamente donde más importa
                        </li>
                        <li style="font-size: 13px; color: #444; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> Sin pastillas azules, sin receta médica, sin efectos secundarios
                        </li>
                        <li style="font-size: 13px; color: #444; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> Resultados visibles desde las primeras semanas
                        </li>
                        <li style="font-size: 13px; color: #444; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> Fórmula 100% natural, imposible de conseguir en farmacias
                        </li>
                        <li style="font-size: 13px; color: #444; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> Funciona incluso si ya probaste todo lo demás
                        </li>
                        <li style="font-size: 13px; color: #444; margin-bottom: 0; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> Garantía total de 60 días — si no funciona, te devolvemos cada centavo sin preguntas
                        </li>
                    </ul>
                </div>

                <!-- Urgency -->
                <div style="border-left: 4px solid #c62120; background: #fff5f5; padding: 12px; margin-bottom: 24px; border-radius: 0 4px 4px 0;">
                    <div style="color: #c62120; font-weight: 800; font-size: 13px; line-height: 1.5;">
                        ⚠️ ATENCIÓN: Debido a la alta demanda, las unidades disponibles son limitadas. El precio puede aumentar en cualquier momento sin previo aviso.
                    </div>
                </div>

                <!-- CTA -->
                <button class="article-cta" onclick="checkout();" style="margin: 0; position: relative; z-index: 9999;">QUIERO CURAR MI IMPOTENCIA</button>
                <div class="cta-note" style="margin-top: 12px;">✓ Compra Segura y Discreta</div>

            </div>
`;

// Insert productSectionHTML before <!-- COMMENTS SECTION -->
const commentsDivider = "            <!-- COMMENTS SECTION -->";
const insertPos = html.indexOf(commentsDivider);
if (insertPos !== -1) {
    html = html.substring(0, insertPos) + productSectionHTML + html.substring(insertPos);
}

html = html.replace(/let isVslLocked = true;[\s\S]*?function handleVSLClick\(\) \{[\s\S]*?\}/, 'let isVslLocked = true;\n\n        function handleVSLClick() {\n            checkout();\n        }');

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Modifications written to index.html successfully!');
