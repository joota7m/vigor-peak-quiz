const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

const newProductSection = `
            <!-- PRODUCT SECTION -->
            <div class="locked-item" style="background: #f9f9f9; border: 1px solid #eee; border-radius: 8px; padding: 24px 16px; margin: 32px 0;">
                
                <h2 style="font-size: 24px; font-weight: 900; color: #000; text-align: center; margin-bottom: 8px; line-height: 1.2;">
                    El Protocolo Secreto del Dr. Markus que está cambiando la vida de miles de hombres
                </h2>
                <h3 style="font-size: 15px; font-weight: 400; color: #444; text-align: center; margin-bottom: 24px; line-height: 1.5;">
                    Una sal natural descubierta fuera del sistema médico que reactiva tu rendimiento masculino — sin pastillas, sin receta, sin efectos secundarios
                </h3>

                <!-- Product Image Placeholder -->
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="/assets/DR_MARKUS.jpg" alt="Producto Oficial Dr. Markus" style="max-width: 100%; height: auto; max-height: 280px; object-fit: contain; border-radius: 8px;">
                </div>

                <!-- Price Box -->
                <div style="background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%); padding: 18px 14px; border-radius: 7px; margin-bottom: 24px; text-align: center; box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);">
                    <div style="font-size: 15px; color: #333; font-weight: 600; margin-bottom: 4px; text-decoration: line-through;">Precio Original: $97</div>
                    <div style="display: flex; justify-content: center; align-items: baseline; gap: 8px;">
                        <span style="font-size: 42px; font-weight: 900; color: #000; letter-spacing: -1px;">$19,97</span>
                    </div>
                    <div style="font-size: 14px; color: #0a7a3b; margin-top: 6px; font-weight: 900; background: #fff; display: inline-block; padding: 6px 14px; border-radius: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">¡ACCESO INMEDIATO!</div>
                    <div style="font-size: 13px; color: #000; margin-top: 12px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 4px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        Pago 100% seguro y encriptado
                    </div>
                </div>

                <!-- Benefits Bullets -->
                <div style="background: #fff; padding: 16px; border-radius: 7px; margin-bottom: 24px; border: 1px solid #eee;">
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="font-size: 13px; color: #444; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> Acceso instantáneo al método completo del Dr. Markus
                        </li>
                        <li style="font-size: 13px; color: #444; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> La sal natural que reactiva la circulación donde más importa
                        </li>
                        <li style="font-size: 13px; color: #444; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> Sin pastillas azules, sin receta, sin efectos secundarios
                        </li>
                        <li style="font-size: 13px; color: #444; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4;">
                            <span style="color: #2e7d32; font-size: 15px; flex-shrink: 0;">✅</span> Protocolo paso a paso, fácil de aplicar desde casa
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
                        ⚠️ ATENCIÓN: Este precio especial de lanzamiento es exclusivo para quienes vieron este video hoy. El Dr. Markus no garantiza que este acceso siga disponible a este valor mañana.
                    </div>
                </div>

                <!-- CTA -->
                <button class="article-cta" onclick="checkout();" style="margin: 0; position: relative; z-index: 9999;">QUIERO CURAR MI IMPOTENCIA</button>

            </div>
`;

// Replace the old product block
const startString = "            <!-- PRODUCT SECTION -->";
const endString = "            <!-- COMMENTS SECTION -->";

const startIndex = html.indexOf(startString);
const endIndex = html.indexOf(endString);

if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + newProductSection + html.substring(endIndex);
    fs.writeFileSync('index.html', html, 'utf-8');
    console.log("Updated product section copy successfully");
} else {
    console.log("Could not find boundaries for product section");
}
