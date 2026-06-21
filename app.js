const dishes = [
  { id: "stir-fried-beef", name: "小炒黄牛肉", price: 48, category: "牛肉", tag: "下饭王", colors: ["#8b3d27", "#5d873c", "#d76d32"] },
  { id: "pepper-pork", name: "辣椒炒肉", price: 32, category: "猪肉", tag: "家常必点", colors: ["#9a4a31", "#6d963e", "#cf753b"] },
  { id: "red-braised-pork", name: "红烧肉", price: 42, category: "猪肉", tag: "浓香", colors: ["#863722", "#b95b32", "#e0a44e"] },
  { id: "stir-fried-ribs", name: "生炒排骨", price: 48, category: "猪肉", tag: "锅气足", colors: ["#8a432a", "#47723e", "#d39a3b"] },
  { id: "tea-oil-chicken", name: "茶油小炒鸡", price: 52, category: "鸡肉", tag: "招牌", colors: ["#7e3a26", "#527a3c", "#d28735"] },
  { id: "sizzling-chicken", name: "啫啫鸡", price: 48, category: "鸡肉", tag: "砂锅香", colors: ["#7b3f2b", "#5d8245", "#c9953e"] },
  { id: "sizzling-ribs", name: "啫啫排骨", price: 52, category: "猪肉", tag: "砂锅香", colors: ["#88422c", "#4d7540", "#d7a548"] },
  { id: "chopped-chili-fish-head", name: "剁椒鱼头", price: 68, category: "海鲜", tag: "宴客菜", colors: ["#d34b35", "#ed8c43", "#f1d7a2"] },
  { id: "dry-pot-beef-radish", name: "干锅牛肉萝卜丝", price: 46, category: "牛肉", tag: "香辣", colors: ["#76402d", "#e4d49e", "#bd6535"] },
  { id: "pork-ball-pea-shoot-soup", name: "猪肉丸子豆尖汤", price: 32, category: "汤羹", tag: "清鲜", colors: ["#d7a06c", "#4e8b54", "#f1e6c8"] },
  { id: "chili-cured-pork", name: "辣椒炒腊肉", price: 38, category: "猪肉", tag: "烟火气", colors: ["#84412b", "#539047", "#d86339"] },
  { id: "stir-fried-sausage", name: "爆炒腊肠", price: 36, category: "猪肉", tag: "咸香", colors: ["#9b4232", "#68873b", "#d8a044"] },
  { id: "tomato-beef-brisket", name: "番茄牛腩", price: 48, category: "牛肉", tag: "酸甜浓郁", colors: ["#a7402f", "#d55d36", "#e4b044"] },
  { id: "sweet-sour-ribs", name: "糖醋排骨", price: 46, category: "猪肉", tag: "酸甜", colors: ["#873622", "#bd4e2e", "#e7aa3e"] },
  { id: "green-pepper-pork", name: "青椒肉丝", price: 28, category: "猪肉", tag: "快手菜", colors: ["#a36a45", "#4d8b43", "#94a849"] },
  { id: "pickled-cabbage-beef-mince", name: "酸菜牛肉沫", price: 32, category: "牛肉", tag: "开胃", colors: ["#7b4930", "#a1a84c", "#d0bd65"] },
  { id: "double-pepper-beef-mince", name: "双椒牛肉沫", price: 32, category: "牛肉", tag: "双椒香", colors: ["#78422e", "#4c8d3f", "#d55135"] },
  { id: "ants-climbing-tree", name: "蚂蚁上树", price: 26, category: "猪肉", tag: "经典", colors: ["#9e603b", "#d69b54", "#784e32"] },
  { id: "poached-shrimp", name: "白灼虾", price: 58, category: "海鲜", tag: "鲜甜", colors: ["#e27850", "#f1a36a", "#e8d6b0"] },
  { id: "cold-pig-ear", name: "凉拌猪耳朵", price: 34, category: "凉菜", tag: "爽脆", colors: ["#af7355", "#d65336", "#568a4c"] },
  { id: "steamed-egg", name: "水蒸蛋", price: 16, category: "蛋类", tag: "嫩滑", colors: ["#e8bd59", "#f4d87b", "#d99a36"] },
  { id: "hand-torn-cabbage", name: "手撕包菜", price: 18, category: "素菜", tag: "锅气足", colors: ["#6f9b4b", "#9cba5c", "#d9b148"] },
  { id: "sizzling-cauliflower", name: "啫啫花菜", price: 24, category: "素菜", tag: "干香", colors: ["#d5bd77", "#779548", "#bd6b3c"] },
  { id: "seasonal-greens", name: "清炒时蔬", price: 18, category: "素菜", tag: "每日新鲜", colors: ["#49824b", "#72a85c", "#aad076"] },
  { id: "stir-fried-eggplant", name: "清炒茄子", price: 20, category: "素菜", tag: "软糯", colors: ["#674269", "#80517d", "#78a054"] },
  { id: "stir-fried-yardlong-beans", name: "小炒豇豆", price: 22, category: "素菜", tag: "爽口", colors: ["#598845", "#82a64e", "#bd7540"] },
  { id: "mapo-tofu", name: "麻婆豆腐", price: 20, category: "素菜", tag: "麻辣", colors: ["#e1c58c", "#b8442f", "#d96934"] },
  { id: "pork-bone-soup", name: "筒骨汤", price: 46, category: "汤羹", tag: "慢炖", colors: ["#d7c7a6", "#f0e4c9", "#8ba169"] },
  { id: "coconut-chicken", name: "椰子鸡", price: 88, category: "火锅", tag: "全家分享", colors: ["#e4d3ad", "#f6ead0", "#78a46b"] },
  { id: "sour-soup-beef-hotpot", name: "酸汤牛肉火锅", price: 98, category: "火锅", tag: "酸辣开胃", colors: ["#d45734", "#e8a344", "#7a9b4d"] },
  { id: "mashed-pepper-century-egg", name: "擂椒皮蛋", price: 22, category: "凉菜", tag: "湘味", colors: ["#526246", "#72914e", "#443f36"] },
  { id: "tiger-skin-pepper", name: "虎皮青椒", price: 20, category: "素菜", tag: "焦香", colors: ["#467c3c", "#799947", "#4d5c35"] },
  { id: "tofu-ball-soup", name: "豆腐圆子汤", price: 28, category: "汤羹", tag: "清润", colors: ["#e5d3ae", "#f0e3c8", "#699458"] },
  { id: "tomato-egg-soup", name: "番茄鸡蛋汤", price: 20, category: "汤羹", tag: "家常", colors: ["#d65336", "#e9bd55", "#f2d990"] },
  { id: "chive-yellow-eggs", name: "韭黄炒鸡蛋", price: 24, category: "蛋类", tag: "鲜香", colors: ["#d6b950", "#e9d46e", "#8b9c4f"] },
  { id: "dumplings", name: "饺子", price: 22, category: "主食", tag: "现煮", colors: ["#e8d8bb", "#f4ead8", "#759653"] },
  { id: "luosifen", name: "螺蛳粉", price: 18, category: "主食", tag: "嗦粉", colors: ["#a95b35", "#d5994c", "#7b9b4a"] },
  { id: "instant-noodles", name: "泡面", price: 10, category: "主食", tag: "深夜食堂", colors: ["#d59a42", "#ebc364", "#71904b"] },
  { id: "changde-beef-noodles", name: "常德牛肉炖粉", price: 38, category: "主食", tag: "提前一周预订", preorder: true, colors: ["#8b482c", "#d49b4b", "#6e9148"] },
];

const chores = [
  { id: "cook", name: "做菜", icon: "🍳", reward: 20, desc: "按今日菜单掌勺，完成一桌好饭", bg: "#f8e4cf" },
  { id: "fruit", name: "洗水果", icon: "🍎", reward: 6, desc: "洗净、切好，再端到大家面前", bg: "#f7dfdc" },
  { id: "floor", name: "扫地拖地", icon: "🧹", reward: 12, desc: "地面清爽，走路都更轻快", bg: "#e4ecdb" },
  { id: "laundry", name: "洗烘衣服", icon: "🧺", reward: 10, desc: "分类、洗涤、烘干，别忘了收衣服", bg: "#dcecf1" },
  { id: "dishes", name: "洗碗", icon: "🫧", reward: 20, desc: "餐具归位，厨房恢复清清爽爽", bg: "#e1edf5" },
  { id: "change-sheets", name: "更换床单", icon: "🛏️", reward: 10, desc: "换下旧床单，铺好干净床品", bg: "#e8e2f3" },
  { id: "take-out-trash", name: "倒垃圾", icon: "🗑️", reward: 10, desc: "打包垃圾并换上新的垃圾袋", bg: "#e4eadf" },
  { id: "custom", name: "其他家务", icon: "✨", reward: 8, desc: "临时任务也可以清楚地派出去", bg: "#eee4f3" },
];

const categoryGroups = [
  { label: "全部", value: "全部" },
  { label: "推荐", value: "推荐" },
  { label: "牛肉", value: "牛肉" },
  { label: "猪肉", value: "猪肉" },
  { label: "鸡肉", value: "鸡肉" },
  { label: "海鲜", value: "海鲜" },
  { label: "素菜", value: "素菜" },
  { label: "汤锅", value: "汤锅" },
  { label: "主食", value: "主食" },
];

const storageKeys = {
  member: "family-bistro-current-member",
  cart: "family-bistro-cart",
  orders: "family-bistro-orders",
};

const FAMILY_MEMBERS = ["小黄", "小钱"];
const LEGACY_MEMBER_NAMES = {
  我: "小黄",
  老婆: "小钱",
};

function normalizeMemberName(value = "") {
  return LEGACY_MEMBER_NAMES[value] || value;
}

function normalizeOrderMemberNames(order) {
  return {
    ...order,
    createdBy: normalizeMemberName(order.createdBy),
    assignee: normalizeMemberName(order.assignee),
    requestedAssignee: normalizeMemberName(order.requestedAssignee),
  };
}

const rawStoredMember = localStorage.getItem(storageKeys.member);
const storedMember = normalizeMemberName(rawStoredMember);
if (storedMember && storedMember !== rawStoredMember) {
  localStorage.setItem(storageKeys.member, storedMember);
}

const state = {
  activeView: "menu",
  category: "全部",
  query: "",
  orderTab: "all",
  selectedChore: null,
  selectedJoinMember: FAMILY_MEMBERS.includes(storedMember) ? storedMember : "小黄",
  members: FAMILY_MEMBERS,
  currentMember: FAMILY_MEMBERS.includes(storedMember) ? storedMember : "小黄",
  cart: load(storageKeys.cart, {}),
  orders: load(storageKeys.orders, []).map(normalizeOrderMemberNames),
};
save(storageKeys.orders, state.orders);

const cloud = {
  client: null,
  user: null,
  householdId: null,
  channel: null,
  configured: false,
  ready: false,
};

const els = {
  dishGrid: document.querySelector("#dishGrid"),
  dishCount: document.querySelector("#dishCount"),
  dishSearch: document.querySelector("#dishSearch"),
  categoryStrip: document.querySelector("#categoryStrip"),
  dishEmpty: document.querySelector("#dishEmpty"),
  choreGrid: document.querySelector("#choreGrid"),
  orderList: document.querySelector("#orderList"),
  orderEmpty: document.querySelector("#orderEmpty"),
  orderBadge: document.querySelector("#orderBadge"),
  pointsSummary: document.querySelector("#pointsSummary"),
  pointsList: document.querySelector("#pointsList"),
  pointsEmpty: document.querySelector("#pointsEmpty"),
  pointsTotal: document.querySelector("#pointsTotal"),
  cartFab: document.querySelector("#cartFab"),
  cartCount: document.querySelector("#cartCount"),
  cartTotal: document.querySelector("#cartTotal"),
  cartSheet: document.querySelector("#cartSheet"),
  cartList: document.querySelector("#cartList"),
  checkoutTotal: document.querySelector("#checkoutTotal"),
  orderNote: document.querySelector("#orderNote"),
  memberSheet: document.querySelector("#memberSheet"),
  memberList: document.querySelector("#memberList"),
  choreSheet: document.querySelector("#choreSheet"),
  selectedChore: document.querySelector("#selectedChore"),
  choreAssignee: document.querySelector("#choreAssignee"),
  choreDue: document.querySelector("#choreDue"),
  choreNote: document.querySelector("#choreNote"),
  joinSheet: document.querySelector("#joinSheet"),
  joinMemberList: document.querySelector("#joinMemberList"),
  familyInviteCode: document.querySelector("#familyInviteCode"),
  joinFamilyButton: document.querySelector("#joinFamilyButton"),
  memberGreeting: document.querySelector("#memberGreeting"),
  syncStatus: document.querySelector("#syncStatus"),
  sheetBackdrop: document.querySelector("#sheetBackdrop"),
  toast: document.querySelector("#toast"),
};

function load(key, fallback) {
  try {
    const stored = JSON.parse(localStorage.getItem(key));
    return stored ?? fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function setSyncStatus(mode, text) {
  els.syncStatus.className = `sync-status sync-${mode}`;
  els.syncStatus.querySelector("span").textContent = text;
}

function cloudConfig() {
  const config = window.FAMILY_CLOUD_CONFIG || {};
  return {
    url: String(config.supabaseUrl || "").trim(),
    key: String(config.supabaseAnonKey || "").trim(),
  };
}

function cloudOrderFromRow(row) {
  return {
    ...row.payload,
    id: row.id,
    type: row.order_type,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    createdBy: normalizeMemberName(row.created_by_name),
    status: row.status,
    assignee: normalizeMemberName(row.assignee_name || ""),
    requestedAssignee: normalizeMemberName(row.payload?.requestedAssignee || ""),
  };
}

async function loadCloudOrders() {
  if (!cloud.ready) return;
  const rows = [];
  const pageSize = 1000;
  for (let offset = 0; ; offset += pageSize) {
    const { data, error } = await cloud.client
      .from("family_orders")
      .select("*")
      .eq("household_id", cloud.householdId)
      .order("created_at", { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) {
      setSyncStatus("error", "同步暂时中断");
      return;
    }
    rows.push(...data);
    if (data.length < pageSize) break;
  }

  state.orders = rows.map(cloudOrderFromRow);
  save(storageKeys.orders, state.orders);
  renderOrders();
  renderPoints();
  setSyncStatus("online", "家庭订单已实时同步");
}

async function connectHousehold(membership) {
  cloud.householdId = membership.household_id;
  const displayName = normalizeMemberName(membership.display_name);
  state.currentMember = displayName;
  state.selectedJoinMember = displayName;
  localStorage.setItem(storageKeys.member, state.currentMember);
  cloud.ready = true;
  renderMembers();
  await loadCloudOrders();

  if (cloud.channel) await cloud.client.removeChannel(cloud.channel);
  cloud.channel = cloud.client
    .channel(`family-orders-${cloud.householdId}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "family_orders",
        filter: `household_id=eq.${cloud.householdId}`,
      },
      () => loadCloudOrders(),
    )
    .subscribe((status) => {
      if (status === "SUBSCRIBED") setSyncStatus("online", "家庭订单已实时同步");
      if (["CHANNEL_ERROR", "TIMED_OUT"].includes(status)) setSyncStatus("error", "实时连接正在重试");
    });
}

async function initCloudSync() {
  const config = cloudConfig();
  cloud.configured = Boolean(config.url && config.key);

  if (!cloud.configured) {
    setSyncStatus("local", "本机模式 · 等待配置云同步");
    return;
  }

  if (!window.supabase?.createClient) {
    setSyncStatus("error", "云服务组件加载失败");
    return;
  }

  try {
    setSyncStatus("connecting", "正在连接家庭订单");
    cloud.client = window.supabase.createClient(config.url, config.key, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
    });

    let {
      data: { session },
    } = await cloud.client.auth.getSession();

    if (!session) {
      const { data, error } = await cloud.client.auth.signInAnonymously();
      if (error) throw error;
      session = data.session;
    }

    cloud.user = session.user;
    const { data: membership, error } = await cloud.client
      .from("family_members")
      .select("household_id, display_name")
      .eq("user_id", cloud.user.id)
      .maybeSingle();

    if (error) throw error;
    if (!membership) {
      setSyncStatus("joining", "请选择身份并加入家庭");
      openSheet(els.joinSheet);
      return;
    }

    await connectHousehold(membership);
  } catch (error) {
    console.error("家庭订单连接失败", error);
    setSyncStatus("error", "云同步连接失败");
    showToast("云同步暂时未连接，本机订单仍然保留");
  }
}

async function joinFamily() {
  const inviteCode = els.familyInviteCode.value.trim();
  if (!inviteCode) {
    showToast("请输入家庭邀请码");
    return;
  }

  els.joinFamilyButton.disabled = true;
  els.joinFamilyButton.textContent = "正在加入…";
  const { data: householdId, error } = await cloud.client.rpc("join_family_household", {
    invite_code: inviteCode,
    member_name: state.selectedJoinMember,
  });
  els.joinFamilyButton.disabled = false;
  els.joinFamilyButton.textContent = "加入家庭并开始同步";

  if (error) {
    showToast(error.message.includes("邀请码") ? "家庭邀请码不正确" : "加入失败，请检查 Supabase 设置");
    return;
  }

  els.familyInviteCode.value = "";
  closeSheets();
  await connectHousehold({ household_id: householdId, display_name: state.selectedJoinMember });
  showToast("连接成功，你们现在能看到彼此的订单了");
}

async function createCloudOrder(order) {
  if (!cloud.ready) return true;
  const { error } = await cloud.client.from("family_orders").insert({
    id: order.id,
    household_id: cloud.householdId,
    created_by: cloud.user.id,
    created_by_name: state.currentMember,
    order_type: order.type,
    payload: order,
    status: order.status,
    assignee_name: order.assignee || "",
  });
  if (error) {
    setSyncStatus("error", "订单未同步，正在保留本机副本");
    console.error("订单上传失败", error);
    return false;
  }
  return true;
}

async function updateCloudOrder(order, action) {
  if (!cloud.ready) return true;
  const changes = {
    payload: order,
    status: order.status,
    assignee_name: order.assignee || "",
    updated_at: new Date().toISOString(),
  };
  if (action === "claim") changes.assignee_id = cloud.user.id;
  const { error } = await cloud.client
    .from("family_orders")
    .update(changes)
    .eq("id", order.id);
  if (error) {
    setSyncStatus("error", "状态未同步，请稍后重试");
    console.error("订单状态更新失败", error);
    return false;
  }
  return true;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  return `¥${value}`;
}

function filteredDishes() {
  return dishes.filter((dish, index) => {
    const matchesQuery = dish.name.includes(state.query.trim());
    let matchesCategory = state.category === "全部";
    if (state.category === "推荐") matchesCategory = index < 10 || dish.tag.includes("招牌");
    else if (state.category === "汤锅") matchesCategory = ["汤羹", "火锅"].includes(dish.category);
    else if (state.category !== "全部") matchesCategory = dish.category === state.category;
    return matchesQuery && matchesCategory;
  });
}

function renderCategories() {
  els.categoryStrip.innerHTML = categoryGroups
    .map(
      (category) =>
        `<button class="${category.value === state.category ? "active" : ""}" data-category="${category.value}">${category.label}</button>`,
    )
    .join("");
}

function dishImage(dish) {
  const [a, b, c] = dish.colors;
  return `
    <div class="dish-image" style="--dish-bg:${lighten(a)};--dish-a:${a};--dish-b:${b};--dish-c:${c}">
      <div class="dish-fallback" aria-hidden="true"></div>
      <img src="./assets/dishes/${dish.id}.webp" alt="${dish.name}" loading="lazy"
        onerror="this.style.display='none'" />
      <span class="dish-tag">${dish.tag}</span>
    </div>`;
}

function lighten(hex) {
  const clean = hex.replace("#", "");
  const values = [0, 2, 4].map((start) => parseInt(clean.slice(start, start + 2), 16));
  return `rgb(${values.map((n) => Math.round(n + (255 - n) * 0.72)).join(",")})`;
}

function renderDishes() {
  const visible = filteredDishes();
  els.dishCount.textContent = `${visible.length} 道`;
  els.dishEmpty.classList.toggle("hidden", visible.length > 0);
  els.dishGrid.innerHTML = visible
    .map((dish) => {
      const quantity = state.cart[dish.id] || 0;
      return `
        <article class="dish-card">
          ${dishImage(dish)}
          <div class="dish-content">
            <h3>${dish.name}</h3>
            <div class="dish-meta">
              <span class="dish-price">${money(dish.price)}</span>
              ${
                quantity
                  ? `<div class="quantity-control">
                      <button data-cart-change="${dish.id}" data-delta="-1" aria-label="减少${dish.name}">−</button>
                      <span>${quantity}</span>
                      <button data-cart-change="${dish.id}" data-delta="1" aria-label="增加${dish.name}">+</button>
                    </div>`
                  : `<button class="add-dish" data-cart-change="${dish.id}" data-delta="1" aria-label="添加${dish.name}">+</button>`
              }
            </div>
          </div>
        </article>`;
    })
    .join("");
}

function renderChores() {
  els.choreGrid.innerHTML = chores
    .map(
      (chore) => `
        <button class="chore-card" data-chore="${chore.id}">
          <span class="chore-icon" style="--chore-bg:${chore.bg}">${chore.icon}</span>
          <span class="chore-copy">
            <strong>${chore.name}</strong>
            <small>${chore.desc}</small>
          </span>
          <span class="chore-reward">+${chore.reward}<br />积分</span>
        </button>`,
    )
    .join("");
}

function cartDetails() {
  return Object.entries(state.cart)
    .filter(([, quantity]) => quantity > 0)
    .map(([id, quantity]) => ({ dish: dishes.find((item) => item.id === id), quantity }))
    .filter((item) => item.dish);
}

function renderCart() {
  const items = cartDetails();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  els.cartFab.classList.toggle("hidden", count === 0 || state.activeView !== "menu");
  els.cartCount.textContent = count;
  els.cartTotal.textContent = money(total);
  els.checkoutTotal.textContent = money(total);
  els.cartList.innerHTML = items
    .map(
      ({ dish, quantity }) => `
        <div class="cart-item">
          <div>
            <strong>${dish.name}</strong>
            <small>${money(dish.price * quantity)}</small>
          </div>
          <div class="quantity-control">
            <button data-cart-change="${dish.id}" data-delta="-1">−</button>
            <span>${quantity}</span>
            <button data-cart-change="${dish.id}" data-delta="1">+</button>
          </div>
        </div>`,
    )
    .join("");
}

function changeCart(id, delta) {
  const dish = dishes.find((item) => item.id === id);
  if (!dish) return;
  const next = Math.max(0, (state.cart[id] || 0) + delta);
  if (dish.preorder && delta > 0 && !state.cart[id]) {
    showToast("常德牛肉炖粉需要提前一周预订哦");
  }
  if (next) state.cart[id] = next;
  else delete state.cart[id];
  save(storageKeys.cart, state.cart);
  renderDishes();
  renderCart();
}

function renderMembers() {
  const colors = ["#38694c", "#c84f36"];
  els.memberList.innerHTML = state.members
    .map(
      (member, index) => `
        <button class="member-option ${member === state.currentMember ? "active" : ""}" data-member="${escapeHtml(member)}"
          ${cloud.ready && member !== state.currentMember ? "disabled" : ""}>
          <span class="member-avatar" style="--avatar:${colors[index % colors.length]}">${escapeHtml(member.slice(0, 1))}</span>
          ${escapeHtml(member)}
        </button>`,
    )
    .join("");
  els.joinMemberList.innerHTML = state.members
    .map(
      (member, index) => `
        <button class="member-option ${member === state.selectedJoinMember ? "active" : ""}" data-join-member="${escapeHtml(member)}">
          <span class="member-avatar" style="--avatar:${colors[index % colors.length]}">${escapeHtml(member.slice(0, 1))}</span>
          ${escapeHtml(member)}
        </button>`,
    )
    .join("");
  els.memberGreeting.textContent = `${state.currentMember}，今天想吃点什么？`;
  els.choreAssignee.innerHTML = [
    `<option value="谁有空谁接">谁有空谁接</option>`,
    ...state.members.map((member) => `<option value="${escapeHtml(member)}">${escapeHtml(member)}</option>`),
  ].join("");
}

function renderOrders() {
  const filtered = state.orders.filter((order) => state.orderTab === "all" || order.type === state.orderTab);
  els.orderEmpty.classList.toggle("hidden", filtered.length > 0);
  els.orderList.innerHTML = filtered.map(orderTemplate).join("");
  const unfinished = state.orders.filter((order) => order.status !== "done").length;
  els.orderBadge.textContent = unfinished;
  els.orderBadge.classList.toggle("hidden", unfinished === 0);
}

function completedChorePoints() {
  return state.orders
    .filter((order) => order.type === "chore" && order.status === "done" && order.assignee && Number(order.reward) > 0)
    .map((order) => ({
      id: order.id,
      member: normalizeMemberName(order.assignee),
      title: order.title,
      icon: order.icon || "✓",
      points: Number(order.reward),
      completedAt: order.completedAt || order.updatedAt || order.createdAt,
    }))
    .filter((entry) => state.members.includes(entry.member))
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
}

function renderPoints() {
  const entries = completedChorePoints();
  const totals = Object.fromEntries(state.members.map((member) => [member, 0]));
  entries.forEach((entry) => {
    totals[entry.member] += entry.points;
  });
  const ranking = state.members
    .map((member, index) => ({ member, points: totals[member], index }))
    .sort((a, b) => b.points - a.points || a.index - b.index);

  els.pointsSummary.innerHTML = ranking
    .map(
      ({ member, points }, index) => `
        <article class="points-person ${index === 0 && points > 0 ? "leader" : ""}">
          <span class="points-rank">${index === 0 && points > 0 ? "🏆" : `#${index + 1}`}</span>
          <span class="member-avatar" style="--avatar:${member === state.members[0] ? "#38694c" : "#c84f36"}">${escapeHtml(member.slice(0, 1))}</span>
          <span class="points-person-copy">
            <strong>${escapeHtml(member)}</strong>
            <small>${entries.filter((entry) => entry.member === member).length} 次完成</small>
          </span>
          <b>${points}<small> 分</small></b>
        </article>`,
    )
    .join("");

  els.pointsList.innerHTML = entries
    .map(
      (entry) => `
        <article class="points-entry">
          <span class="points-entry-icon">${entry.icon}</span>
          <span class="points-entry-copy">
            <strong>${escapeHtml(entry.title)}</strong>
            <small>${escapeHtml(entry.member)} · ${formatTime(entry.completedAt)}</small>
          </span>
          <b>+${entry.points}</b>
        </article>`,
    )
    .join("");
  els.pointsEmpty.classList.toggle("hidden", entries.length > 0);
  els.pointsTotal.textContent = `累计 ${entries.reduce((sum, entry) => sum + entry.points, 0)} 分`;
}

function orderTemplate(order) {
  const statusMap = {
    pending: ["待接单", "status-pending"],
    doing: [order.type === "food" ? "制作中" : "进行中", "status-doing"],
    done: ["已完成", "status-done"],
  };
  const [statusText, statusClass] = statusMap[order.status];
  const body =
    order.type === "food"
      ? `<div class="food-lines">${order.items
          .map(
            (item) =>
              `<div class="food-line"><span>${escapeHtml(item.name)} × ${item.quantity}</span><strong>${money(item.price * item.quantity)}</strong></div>`,
          )
          .join("")}</div>${order.note ? `<p class="order-note">备注：${escapeHtml(order.note)}</p>` : ""}`
      : `<div class="chore-detail">
          <strong>${escapeHtml(order.title)}</strong>
          <span>希望完成：${escapeHtml(order.due)}</span>
          ${order.note ? `<span>说明：${escapeHtml(order.note)}</span>` : ""}
          <span>奖励：${order.reward} 家庭积分</span>
        </div>`;
  let nextAction = "";
  if (order.status === "pending") nextAction = `<button class="small-button primary" data-order-action="claim" data-order-id="${order.id}">接单</button>`;
  if (order.status === "doing") nextAction = `<button class="small-button primary" data-order-action="complete" data-order-id="${order.id}">完成啦</button>`;
  return `
    <article class="order-card">
      <div class="order-top">
        <div class="order-kind">
          <span>${order.type === "food" ? "🍚" : order.icon}</span>
          <span>
            <strong>${order.type === "food" ? `点菜单 · ${money(order.total)}` : "家务派单"}</strong>
            <small>${formatTime(order.createdAt)}</small>
          </span>
        </div>
        <span class="status-pill ${statusClass}">${statusText}</span>
      </div>
      <div class="order-body">${body}</div>
      <div class="order-footer">
        <div class="order-owner">
          由 <strong>${escapeHtml(order.createdBy)}</strong> 发起
          ${order.assignee ? `<br />${order.status === "pending" ? "指定" : "接单"}：<strong>${escapeHtml(order.assignee)}</strong>` : ""}
        </div>
        <div class="order-actions">
          <button class="small-button" data-order-action="share" data-order-id="${order.id}">分享</button>
          ${nextAction}
        </div>
      </div>
    </article>`;
}

function formatTime(value) {
  const date = new Date(value);
  const now = new Date();
  const day = date.toDateString() === now.toDateString() ? "今天" : `${date.getMonth() + 1}月${date.getDate()}日`;
  return `${day} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function showView(view) {
  state.activeView = view;
  document.querySelectorAll(".view").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  document.querySelectorAll("[data-nav]").forEach((item) => item.classList.toggle("active", item.dataset.nav === view));
  renderCart();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSheet(sheet) {
  closeSheets();
  els.sheetBackdrop.classList.remove("hidden");
  requestAnimationFrame(() => sheet.classList.add("open"));
  document.body.style.overflow = "hidden";
}

function closeSheets() {
  document.querySelectorAll(".bottom-sheet.open").forEach((sheet) => sheet.classList.remove("open"));
  els.sheetBackdrop.classList.add("hidden");
  document.body.style.overflow = "";
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2400);
}

async function submitFoodOrder() {
  const items = cartDetails();
  if (!items.length) return;
  if (cloud.configured && !cloud.ready) {
    showToast("请先连接家庭订单");
    openSheet(els.joinSheet);
    return;
  }
  const order = {
    id: crypto.randomUUID ? crypto.randomUUID() : `food-${Date.now()}`,
    type: "food",
    createdAt: new Date().toISOString(),
    createdBy: state.currentMember,
    assignee: "",
    status: "pending",
    note: els.orderNote.value.trim(),
    items: items.map(({ dish, quantity }) => ({ id: dish.id, name: dish.name, price: dish.price, quantity })),
    total: items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0),
  };
  state.orders.unshift(order);
  state.cart = {};
  save(storageKeys.orders, state.orders);
  save(storageKeys.cart, state.cart);
  els.orderNote.value = "";
  closeSheets();
  renderAll();
  const synced = await createCloudOrder(order);
  showToast(synced ? "点单成功，另一位成员现在能看见啦" : "订单已保存在本机，但暂未同步");
  showView("orders");
}

function openChoreSheet(choreId) {
  state.selectedChore = chores.find((item) => item.id === choreId);
  if (!state.selectedChore) return;
  els.selectedChore.innerHTML = `
    <span>${state.selectedChore.icon}</span>
    <div><strong>${state.selectedChore.name}</strong><small>${state.selectedChore.desc} · +${state.selectedChore.reward} 积分</small></div>`;
  els.choreNote.value = "";
  openSheet(els.choreSheet);
}

async function dispatchChore() {
  if (!state.selectedChore) return;
  if (cloud.configured && !cloud.ready) {
    showToast("请先连接家庭订单");
    openSheet(els.joinSheet);
    return;
  }
  let title = state.selectedChore.name;
  const note = els.choreNote.value.trim();
  if (state.selectedChore.id === "custom" && note) title = note.slice(0, 18);
  const requestedAssignee = els.choreAssignee.value;
  const order = {
    id: crypto.randomUUID ? crypto.randomUUID() : `chore-${Date.now()}`,
    type: "chore",
    createdAt: new Date().toISOString(),
    createdBy: state.currentMember,
    assignee: requestedAssignee === "谁有空谁接" ? "" : requestedAssignee,
    requestedAssignee,
    status: "pending",
    title,
    icon: state.selectedChore.icon,
    reward: state.selectedChore.reward,
    due: els.choreDue.value,
    note,
  };
  state.orders.unshift(order);
  save(storageKeys.orders, state.orders);
  closeSheets();
  renderOrders();
  const synced = await createCloudOrder(order);
  showToast(synced ? `“${title}”已经同步给家人` : "任务已保存在本机，但暂未同步");
  showView("orders");
}

async function orderAction(orderId, action) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  if (action === "claim") {
    order.status = "doing";
    order.assignee = state.currentMember;
    showToast(`${state.currentMember} 接单成功`);
  }
  if (action === "complete") {
    order.status = "done";
    order.completedAt = new Date().toISOString();
    showToast("完成得漂亮，辛苦啦！");
  }
  if (action === "share") shareOrder(order);
  save(storageKeys.orders, state.orders);
  renderOrders();
  renderPoints();
  if (action !== "share") await updateCloudOrder(order, action);
}

function orderShareText(order) {
  if (order.type === "food") {
    const lines = order.items.map((item) => `${item.name} × ${item.quantity}`).join("、");
    return `【502家庭小馆点单】${order.createdBy} 点了：${lines}，合计 ${money(order.total)}${order.note ? `。备注：${order.note}` : ""}。谁来接单呀？`;
  }
  return `【502家庭家务派单】${order.createdBy} 派了“${order.title}”，希望${order.due}完成${order.requestedAssignee ? `，指派给：${order.requestedAssignee}` : ""}${order.note ? `。说明：${order.note}` : ""}。奖励 ${order.reward} 家庭积分。`;
}

async function shareOrder(order) {
  await shareContent(orderShareText(order));
}

async function shareContent(text, title = "502 家庭小馆") {
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url: location.href });
    } else {
      await navigator.clipboard.writeText(`${text}\n${location.href}`);
      showToast("内容和链接已复制");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("暂时无法分享，请手动复制链接");
  }
}

function renderAll() {
  renderCategories();
  renderDishes();
  renderChores();
  renderMembers();
  renderCart();
  renderOrders();
  renderPoints();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav) showView(nav.dataset.nav);

  const category = event.target.closest("[data-category]");
  if (category) {
    state.category = category.dataset.category;
    renderCategories();
    renderDishes();
  }

  const cartChange = event.target.closest("[data-cart-change]");
  if (cartChange) changeCart(cartChange.dataset.cartChange, Number(cartChange.dataset.delta));

  const chore = event.target.closest("[data-chore]");
  if (chore) openChoreSheet(chore.dataset.chore);

  const member = event.target.closest("[data-member]");
  if (member) {
    if (cloud.ready && member.dataset.member !== state.currentMember) {
      showToast("云同步身份已绑定；如需更换，请清除该网站的数据后重新加入");
      return;
    }
    state.currentMember = member.dataset.member;
    localStorage.setItem(storageKeys.member, state.currentMember);
    renderMembers();
    closeSheets();
    showToast(`已切换为 ${state.currentMember}`);
  }

  const joinMember = event.target.closest("[data-join-member]");
  if (joinMember) {
    state.selectedJoinMember = joinMember.dataset.joinMember;
    renderMembers();
  }

  const action = event.target.closest("[data-order-action]");
  if (action) orderAction(action.dataset.orderId, action.dataset.orderAction);

  if (event.target.closest("[data-scroll-to-menu]")) {
    document.querySelector("#dishMenu").scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelectorAll("[data-order-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    state.orderTab = button.dataset.orderTab;
    document.querySelectorAll("[data-order-tab]").forEach((item) => item.classList.toggle("active", item === button));
    renderOrders();
  });
});

els.dishSearch.addEventListener("input", () => {
  state.query = els.dishSearch.value;
  renderDishes();
});

document.querySelector("#cartFab").addEventListener("click", () => openSheet(els.cartSheet));
document.querySelector("#memberButton").addEventListener("click", () => openSheet(els.memberSheet));
document.querySelector("#sheetBackdrop").addEventListener("click", closeSheets);
document.querySelector("#clearCartButton").addEventListener("click", () => {
  state.cart = {};
  save(storageKeys.cart, state.cart);
  renderDishes();
  renderCart();
  closeSheets();
});
document.querySelector("#submitOrderButton").addEventListener("click", submitFoodOrder);
document.querySelector("#dispatchChoreButton").addEventListener("click", dispatchChore);
document.querySelector("#joinFamilyButton").addEventListener("click", joinFamily);
document.querySelector("#shareAppButton").addEventListener("click", () =>
  shareContent("来 502 家庭小馆点菜、接家务啦！"),
);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSheets();
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

renderAll();
initCloudSync();
